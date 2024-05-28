
//Mock Data: User Data
const userData = [{
    userName: "Chris",
    teamName: "Chicago Bulls",
    teamLogo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png",
    teamOverall: function overallRating() {
        const overallValues = this.team.map((element)=>{
            return element.overall;
        });
        const sum = overallValues.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue;
        }, 0);
        return sum / this.team.length; 
    },
    team: [{
        first_name: "Stephen",
        last_name: "Curry",
        overall: 94,
    },{
        first_name: "LeBron",
        last_name: "James",
        overall: 89,
    },{
        first_name: "Giannis",
        last_name: "Antetokounmpo",
        overall: 94,
    },{
        first_name: "Luka",
        last_name: "Doncic",
        overall: 92,
    },{
        first_name: "Kevin",
        last_name: "Durant",
        overall: 89,
    }],
},
{
    userName: "Israel",
    teamName: "Atlanta Hawks",
    teamLogo: "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
    teamOverall: function overallRating() {
        const overallValues = this.team.map((element)=>{
            return element.overall;
        });
        const sum = overallValues.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue;
        }, 0);
        return sum / this.team.length; 
    },
    team: [{
        first_name: "Stephen",
        last_name: "Curry",
        overall: 90,
    },{
        first_name: "LeBron",
        last_name: "James",
        overall: 89,
    },{
        first_name: "Giannis",
        last_name: "Antetokounmpo",
        overall: 93,
    },{
        first_name: "Luka",
        last_name: "Doncic",
        overall: 91,
    },{
        first_name: "Kevin",
        last_name: "Durant",
        overall: 89,
    }],
},{
    userName: "Scotty",
    teamName: "Brooklyn Nets",
    teamLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png",
    teamOverall: function overallRating() {
        const overallValues = this.team.map((element)=>{
            return element.overall;
        });
        const sum = overallValues.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue;
        }, 0);
        return sum / this.team.length; 
    },
    team: [{
        first_name: "Stephen",
        last_name: "Curry",
        overall: 90,
    },{
        first_name: "LeBron",
        last_name: "James",
        overall: 90,
    },{
        first_name: "Giannis",
        last_name: "Antetokounmpo",
        overall: 85,
    },{
        first_name: "Luka",
        last_name: "Doncic",
        overall: 91,
    },{
        first_name: "Kevin",
        last_name: "Durant",
        overall: 70,
    }],
}];

// console.log(userData.teamOverall());

export {userData};


