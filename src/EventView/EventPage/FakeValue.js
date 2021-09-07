export default function FakeValue() {

    const now = new Date();

    return { eventName:"Event",
        quota:0,
        start:new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,now.getHours(),0),
        end:new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,now.getHours()+3,0),
        eventType:"ONLINE",
        eventPrivacy:"IT",
        status:"OWNER",
        eventCategory:"SOMETHING",
        eventDescription:"SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
        eventQuestions:["Are you human","Are you human","Are you human","What da dog doing"],
        createdBy:{name:"My name",base64Image: null,department:"IT"},
        base64Image:null,
        going:25,
        available:true
    }
}

