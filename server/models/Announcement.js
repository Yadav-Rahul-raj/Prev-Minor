import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema(
{
    title: String,
    description: String,
    //date: String,
    creatorName: String,
    creatorEmail:String,
},
{timestamps: true}
);

const Announcement = mongoose.model("Announcement", AnnouncementSchema);
export default Announcement;