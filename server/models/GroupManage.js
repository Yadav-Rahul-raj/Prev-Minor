import mongoose from 'mongoose';

const GroupManageSchema = new mongoose.Schema(
    {
        prjId: String,
        prjName: String,
        prjLeaderName: String,
        teacherId: String,
        teacherName: String,
        prjStatus:{
            type: String,
            enum:["pending","completed"],
            default:"pending",
        },
        prjType:{
            type:String,
            enum:["minor","major"],
            default:"minor",
        },
    },
    {timestamps:true}
);

const GroupManage = mongoose.model("GroupManage", GroupManageSchema);
export default GroupManage;