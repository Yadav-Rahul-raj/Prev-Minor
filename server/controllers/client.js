import Announcement from "../models/Announcement.js";
import User from "../models/User.js";
import ManageFaculty from "../models/ManageFaculty.js";
import AssignMentor from "../models/AssignMentor.js";
import AssignPanel from "../models/AssignPanel.js";
import GroupManage from "../models/GroupManage.js";
import Submission from "../models/Submission.js";

export const getAnnouncements = async (req, res) => {
    try {
      const announcements = await Announcement.find().sort( { 'updatedAt': -1 } ).limit(10);
      
      
      res.status(200).json(announcements);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

export const getManageFaculty = async (req, res) => {
  try{
    //sort should look like this: {'field': "prjId",'sort': 'desc'}
      const { page = 1, pageSize = 20, sort= null, search="",deleteMentor=null} = req.query;


      //formatted sort should look like {prjId: -1}
      const generatSort = ()=>{
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc"? 1: -1),
        };
        return sortFormatted;
      };
      const sortFormatted = Boolean(sort) ? generatSort() : {};
      const manageFacultys = await ManageFaculty.find({
        $or:[
          { prjName: { $regex: new RegExp(search, "i") } },
          { teacherName: { $regex: new RegExp(search, "i") } },
          { prjLeaderName: { $regex: new RegExp(search, "i") } },
          { status: { $regex: new RegExp(search, "i") } },
          { prjStatus: { $regex: new RegExp(search, "i") } },
          { prjType: { $regex: new RegExp(search, "i") } },
        ],
      })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

      const total = await ManageFaculty.countDocuments({
        prjId: { $regex: search, $options: "i" },
    });

    // const deleteRecord = await ManageFaculty.findByIdAndDelete(deleteMentor);

    res.status(200).json({
      manageFacultys,
      total,
      // deleteRecord,
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const deleteMentor = async (req, res) => {
//   try{
//   const {_id} = await ManageFaculty.findByIdAndDelete(req.params.prjId);

//     res.status(200).json(_id);
//   }
//   catch(error){
//     res.status(404).json({message: error.message});
//   }
// };

export const getAssignMentor = async (req, res) => {
  try{
    //sort should look like this: {'field': "prjId",'sort': 'desc'}
      const { page = 1, pageSize = 20, sort= null, search="",deleteMentor=null} = req.query;


      //formatted sort should look like {prjId: -1}
      const generatSort = ()=>{
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc"? 1: -1),
        };
        return sortFormatted;
      };
      const sortFormatted = Boolean(sort) ? generatSort() : {};
      const assignMentors = await AssignMentor.find({
        $or:[
          { prjName: { $regex: new RegExp(search, "i") } },
          { teacherName: { $regex: new RegExp(search, "i") } },
          { prjLeaderName: { $regex: new RegExp(search, "i") } },
          { status: { $regex: new RegExp(search, "i") } },
          { prjStatus: { $regex: new RegExp(search, "i") } },
          { prjType: { $regex: new RegExp(search, "i") } },
        ],
      })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

      const total = await AssignMentor.countDocuments({
        prjId: { $regex: search, $options: "i" },
    });

    // const deleteRecord = await ManageFaculty.findByIdAndDelete(deleteMentor);

    res.status(200).json({
      assignMentors,
      total,
      // deleteRecord,
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAssignPanel = async (req, res) => {
  try{
    //sort should look like this: {'field': "prjId",'sort': 'desc'}
      const { page = 1, pageSize = 20, sort= null, search="",deleteMentor=null} = req.query;


      //formatted sort should look like {prjId: -1}
      const generatSort = ()=>{
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc"? 1: -1),
        };
        return sortFormatted;
      };
      const sortFormatted = Boolean(sort) ? generatSort() : {};
      const assignPanels = await AssignPanel.find({
        $or:[
          { prjName: { $regex: new RegExp(search, "i") } },
          { teacherName: { $regex: new RegExp(search, "i") } },
          { prjLeaderName: { $regex: new RegExp(search, "i") } },
          { status: { $regex: new RegExp(search, "i") } },
          { prjStatus: { $regex: new RegExp(search, "i") } },
          { prjType: { $regex: new RegExp(search, "i") } },
        ],
      })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

      const total = await AssignPanel.countDocuments({
        prjId: { $regex: search, $options: "i" },
    });

    // const deleteRecord = await ManageFaculty.findByIdAndDelete(deleteMentor);

    res.status(200).json({
      assignPanels,
      total,
      // deleteRecord,
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSubmission = async(req,res) =>{
  try{
    //sort should look like this: {'field': "prjId",'sort': 'desc'}
      const { page = 1, pageSize = 20, sort= null, search="",deleteMentor=null} = req.query;


      //formatted sort should look like {prjId: -1}
      const generatSort = ()=>{
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc"? 1: -1),
        };
        return sortFormatted;
      };
      const sortFormatted = Boolean(sort) ? generatSort() : {};
      const submission = await Submission.find({
        $or:[
          { prjName: { $regex: new RegExp(search, "i") } },
          { teacherName: { $regex: new RegExp(search, "i") } },
          { prjLeaderName: { $regex: new RegExp(search, "i") } },
          { status: { $regex: new RegExp(search, "i") } },
          { prjStatus: { $regex: new RegExp(search, "i") } },
          { prjType: { $regex: new RegExp(search, "i") } },
        ],
      })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

      const total = await Submission.countDocuments({
        prjId: { $regex: search, $options: "i" },
    });

    // const deleteRecord = await ManageFaculty.findByIdAndDelete(deleteMentor);

    res.status(200).json({
      submission,
      total,
      // deleteRecord,
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGroupManage = async(req, res)=>{
  try{
    //sort should look like this: {'field': "prjId",'sort': 'desc'}
      const { page = 1, pageSize = 20, sort= null, search="",deleteMentor=null} = req.query;


      //formatted sort should look like {prjId: -1}
      const generatSort = ()=>{
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc"? 1: -1),
        };
        return sortFormatted;
      };
      const sortFormatted = Boolean(sort) ? generatSort() : {};
      const groupManage = await GroupManage.find({
        $or:[
          { prjName: { $regex: new RegExp(search, "i") } },
          { teacherName: { $regex: new RegExp(search, "i") } },
          { prjLeaderName: { $regex: new RegExp(search, "i") } },
          { status: { $regex: new RegExp(search, "i") } },
          { prjStatus: { $regex: new RegExp(search, "i") } },
          { prjType: { $regex: new RegExp(search, "i") } },
        ],
      })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

      const total = await GroupManage.countDocuments({
        prjId: { $regex: search, $options: "i" },
    });

    // const deleteRecord = await ManageFaculty.findByIdAndDelete(deleteMentor);

    res.status(200).json({
      groupManage,
      total,
      // deleteRecord,
    });
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};