/**
 * Created by Administrator on 2015-10-27.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BikesSchema = new Schema({
    type: {type:String, required: true},//����
    component: {type:[String], default : ''},//����ǰ
    height :{type:String, required: true}, //�������
    smartlock:{type:Boolean,default:false},//����Ʈ�ڹ��迬������
    location:[{ //��ġ
        loc : { type:[Number], index:'2d' } ,
        createdAt: { type : Date, default : Date.now }
    }],
    title:{type:String,required: true},//����
    intro:{type:String,default:''},//�Ұ���
    image: [{ // �̹���
        imageid:{type:Schema.ObjectId,default:new mongoose.Types.ObjectId},
        cdnUri:{type:String, default : ''}
    }],
    price:{ //����
        hour:{type:Number,default:0},
        day:{type:Number,default:0},
        month:{type:Number,default:0}
    },
    //user:{type:Schema.ObjectId, ref :'User'},//����������
    comments: [{//�ı�
        commentid:{type:Schema.ObjectId,default:new mongoose.Types.ObjectId},
        point:{type:Number,default:0},
        body: { type : String, default : '' },
        //user: { type : Schema.ObjectId, ref : 'User' },//�ı��ۼ���
        createdAt: { type : Date, default : Date.now }
    }],
    delflag:{type:Boolean, default:false },//���� ����
    createdAt  : {type : Date, default : Date.now},//�����ۼ���
    updatedAt  : {type : Date, default : Date.now}//����������
});

module.exports = db.model('Bikes',BikesSchema);