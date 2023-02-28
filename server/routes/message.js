const { json } = require("express");
const Message = require("../models/Message");
const router = require("express").Router();


//Add message
router.post("/", (req, res) => {
    let messages = new Message(
        {
            firstName: req.body.firstName,
            email: req.body.email,
            message: req.body.message,
        }
    )
    messages.save()
    res.status(200).json(messages)
})


//Delete message
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Message.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send()
        } else {
            res.status(404).json({ message: err })
        }
    })
})


// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id)
//         res.status(200), json("User has been deleted ...")
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


//Get message
router.get("/find/:id", (req, res) => {
    const { id } = req.params;
    Message.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            } else {
                res.status(404).json({ message: err })
            }
        }
    })
})


//Get all message
router.get("/", async (req, res) => {
    const query = req.query.new;
    try {
        const messages = query
            ? await Message.find().sort({ _id: -1 })
            : await Message.find();
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get messsage stats
router.get("/stats", async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await Message.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router