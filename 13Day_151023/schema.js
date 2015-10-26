var InquiresSchema = new Schema({
    user:{type:Schema.ObjectId, ref :'User'},
    body:{type:String,default:''},
    createdAt  : {type : Date, default : Date.now}

});


var CreditsSchema = new Schema({
    cardtype:{type:String,required: true},
    cardnumber:{type:Number,required: true},
    expire:{type:Date,required: true},
    birth:{type:Date,required: true},
    user:{type:Schema.ObjectId, ref :'User'},
    createdAt  : {type : Date, default : Date.now}
})


var UsersSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String,  validate: {
        validator: function(v) {
            return /d{3}-d{3}-d{4}/.test(v);
        },
        message: '{VALUE} is not a valid phone number!'
    } },
    provider: { type: String, default: '' },
    hashed_password: { type: String, default: '' },
    salt: { type: String, default: '' },
    authToken: { type: String, default: '' },
    facebook: {},
    kakao: {},
    createdAt  : {type : Date, default : Date.now}
});



var BikesSchema = new Schema({
    type: {type:String, required: true},
    component: {type:[String], default : ''},
    height :{type:String, required: true},
    smartlock:{type:Boolean,default:false},
    location:{
        type:[Number],
        index:'2d'
    },
    title:{type:String,required: true},
    intro:{type:String,default:''},
    image: {
        cdnUri: [String]
    },
    price:{
        hour:{type:Number,default:0},
        day:{type:Number,default:0},
        month:{type:Number,default:0}
    },
    user:{type:Schema.ObjectId, ref :'User'},
    comments: [{
        point:{type:Number,default:0},
        body: { type : String, default : '' },
        user: { type : Schema.ObjectId, ref : 'User' },
        createdAt: { type : Date, default : Date.now }
    }],
    createdAt  : {type : Date, default : Date.now}
});




var ReservesSchema = new Schema({
    bike:{type:Schema.ObjectId,ref:'Bike'},
    lender:{type : Schema.ObjectId, ref : 'User'},
    resrves : [{
        rentStart: {type: Date, required: true},
        rentEnd: {type: Date, required: true},
        renter:{ type : Schema.ObjectId, ref : 'User'},
        status:{type:String,default:"예약요청"}//예약승인,예약취소,예약요청
    }],
    createdAt  : {type : Date, default : Date.now},
    updatedAt  : {type : Date, default : Date.now}
})