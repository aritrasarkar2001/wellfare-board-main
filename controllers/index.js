const Achievement= require("../models/achievement_main");
const Announcement=require("../models/announcement_main");
const About=require("../models/about");
const Vision=require("../models/vision");
const Event = require("../models/events");

exports.indexView = (req, res) => res.render("landing");

exports.homeView=async (req,res)=>{
    try{
        const AnnounceData = await Announcement.find().sort({creation:-1});
        const AchieveData = await Achievement.find().sort({creation:-1});
        const AboutData= await About.findOne({});
        const VisionData= await Vision.findOne({});
        const EventData = await Event.find({});
        
        return res.render("index",{announcements :AnnounceData,achievements: AchieveData, about:AboutData,vision:VisionData, events: EventData})
    } catch (err) {
       
        console.log(err);
        return res
          .status(424)
          .json({ status: "Failed", message: "Request failed" });
      }
};