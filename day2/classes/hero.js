// import { Person as Pson } from './person.js';
import Pson from './person.js';

export  class Hero extends Pson{
    _mission = "secret mission";
    title = "";
    fname = "";
    lname = "";
    constructor(rtitle,rfname,rlname,xcity){
        super(xcity);
        this.title = rtitle;
        this.fname = rfname;
        this.lname = rlname;
    }
    static sayVersion(){
        return 1001;
    }
    fullname(){
        return this.fname+" "+this.lname;
    }
    get mission(){
        return this._mission;
    }
    set mission(rmission){
        this._mission = rmission;
    }
};