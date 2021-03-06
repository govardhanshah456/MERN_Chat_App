const express=require("express");
const {protect}=require("../middlewares/authMiddleware");
const {accessChat,fetchChat,createGroupChat,renameGroup,groupAdd, groupRemove}=require("../Controllers/chatController");
const router=express.Router();
router.route("/").post(protect,accessChat);
router.route("/").get(protect,fetchChat);
router.route("/group").post(protect,createGroupChat);
router.route("/rename").put(protect,renameGroup);
router.route("/groupadd").put(protect,groupAdd);
router.route("/groupremove").put(protect,groupRemove);
module.exports=router;