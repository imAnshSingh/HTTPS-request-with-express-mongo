const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("Connected to MongoDB successfully.");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "Rahul",
        to: "Priya",
        msg: "Did you finish the assignment?",
        created_at: new Date()
    },
    {
        from: "Sara",
        to: "Rohit",
        msg: "Are you joining the meeting today?",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Anjali",
        msg: "What's the plan for the weekend?",
        created_at: new Date()
    },
    {
        from: "Vikram",
        to: "Meera",
        msg: "Are you free for a quick call?",
        created_at: new Date()
    },
    {
        from: "Sneha",
        to: "Arjun",
        msg: "Let's catch up for coffee!",
        created_at: new Date()
    }
];

// Insert multiple chat documents
Chat.insertMany(allchats)
    .then((docs) => {
        console.log(`${docs.length} chat messages were inserted successfully.`);
    })
    .catch((err) => {
        console.error("Error inserting chats:", err);
    });
