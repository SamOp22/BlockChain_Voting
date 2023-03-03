pragma solidity >= 0.4.22 < 0.9.0;
// SPDX-License-Identifier: MIT
contract Contest{
	
	struct Contestant{
		uint id;
		string name;
		uint voteCount;
		string description;
	}

	struct Voter{
		bool hasVoted;
		uint vote;
	}

	address admin;
	mapping(uint => Contestant) public contestants; 

    mapping(address => Voter) public voters;
	uint public contestantsCount;

	enum PHASE{reg, voting , done}
	PHASE public state;

	modifier onlyAdmin(){
		require(msg.sender==admin);
		_;
	}
	
	modifier validState(PHASE x){
	    require(state==x);
	    _;
	}

	constructor() public{
		admin=msg.sender;
        state=PHASE.reg;
		// counter = 0;

	}

    function changeState(PHASE x) onlyAdmin public{
		require(x > state);
        state = x;
    }

	function addContestant(string memory _name ,  string memory _description) public onlyAdmin validState(PHASE.reg){
		contestantsCount++;
		contestants[contestantsCount]=Contestant(contestantsCount,_name,0,_description);
	}


	function vote(uint _contestantId) public validState(PHASE.voting){
    
		require(!voters[msg.sender].hasVoted);
        require(_contestantId > 0 && _contestantId<=contestantsCount);
		contestants[_contestantId].voteCount++;
		voters[msg.sender].hasVoted=true;
		voters[msg.sender].vote=_contestantId;
	}
}