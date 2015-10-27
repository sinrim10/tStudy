/**
 * Created by Administrator on 2015-10-27.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BikesSchema = new Schema({
    type: {type:String, required: true},//종류
    component: {type:[String], default : ''},//구성품
    height :{type:String, required: true}, //권장신장
    smartlock:{type:Boolean,default:false},//스마트자물쇠연동여부
    location:[{ //위치
        loc : { type:[Number], index:'2d' } ,
        createdAt: { type : Date, default : Date.now }
    }],
    title:{type:String,required: true},//제목
    intro:{type:String,default:''},//소개글
    image: [{ // 이미지
        imageid:{type:Schema.ObjectId,default:new mongoose.Types.ObjectId},
        cdnUri:{type:String, default : ''}
    }],
    price:{ //가격
        hour:{type:Number,default:0},
        day:{type:Number,default:0},
        month:{type:Number,default:0}
    },
    //user:{type:Schema.ObjectId, ref :'User'},//자전거주인
    comments: [{//후기
        commentid:{type:Schema.ObjectId,default:new mongoose.Types.ObjectId},
        point:{type:Number,default:0},
        body: { type : String, default : '' },
        //user: { type : Schema.ObjectId, ref : 'User' },//후기작성자
        createdAt: { type : Date, default : Date.now }
    }],
    delflag:{type:Boolean, default:false },//삭제 여부
    createdAt  : {type : Date, default : Date.now},//최초작성일
    updatedAt  : {type : Date, default : Date.now}//최종수정일
});

module.exports = db.model('Bikes',BikesSchema);