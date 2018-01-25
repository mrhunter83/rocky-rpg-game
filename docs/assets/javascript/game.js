$(document).ready(function() {

	LetsBox();

	// Game function

	function LetsBox() {
		myAudio.play();
		document.getElementById("myAudio").loop = true;
		$("#pause").click(function() {
			myAudio.pause();
		})
		$("#play").click(function() {
			myAudio.play();
		})
		var index = 0;
		var matchup = [];
		var defeated = 0;

		// Assign base stats to each character 

		var Boxers = [{Name:"Rocky Balboa", Health:150, AttackPower:5, CounterAttackPower:6, AttckIncrease:5}, 
		{Name:"Apollo Creed", Health:150, AttackPower:6, CounterAttackPower:7, AttckIncrease:6},
		{Name:"Clubber Lang", Health:160, AttackPower:7, CounterAttackPower:8, AttckIncrease:7},
		{Name:"Ivan Drago", Health: 205, AttackPower: 10, CounterAttackPower:11, AttckIncrease:10}]

		var Rocky = Boxers[0];
		var Apollo = Boxers[1];
		var Clubber = Boxers[2];
		var Ivan = Boxers[3];

			// Create four character divs and assign class "Fighters" to each. 
			// RB=Rocky Balboa, AC=Apollo Creed, CL=Clubber Lang, and ID=Ivan Drago

			$(".col-md-12").append("<header><h1>ROCKY BOXING RPG!</h1></header>")

			RB = $("<div><h3>Rocky Balboa</h3> <img src=assets/images/Rocky.jpg alt=Rock/><h3 id=RockyStats></h3></div>").attr("class","Rocky");
			AC = $("<div><h3>Apollo Creed</h3> <img src=assets/images/Apollo.jpg alt=Creed/><h3 id=ApolloStats></h3></div>").attr("class","Apollo");
			CL = $("<div><h3>Clubber Lang</h3> <img src=assets/images/Clubber.jpg alt=Lang/><h3 id=ClubberStats></h3><h3 id=stats></h3></div>").attr("class","Clubber");
			ID = $("<div><h3>Ivan Drago</h3> <img src=assets/images/Ivan.jpg alt=Drago/><h3 id=IvanStats></h3></div>").attr("class","Ivan");
			VersusBox = $("<div></div>").attr("id","VersusBox");

			$("#fighterRow").append(RB, AC, CL, ID, "<h1 id=chooseFighter>Choose Your Fighter!</h1>");
			// $("#VersusRow").append(VersusBox);
			$("#VersusRow").append("<div id=characterBox></div>")
			$("#VersusRow").append("<div id=opponentBox></div>")
			$("#AttackRow").append("<button id=Attackbtn>FIGHT!</button>");

			$("#RockyStats").append("Health: " + Rocky.Health);
			$("#ApolloStats").append("Health: " + Apollo.Health);
			$("#ClubberStats").append("Health: " + Clubber.Health);
			$("#IvanStats").append("Health: " + Ivan.Health);
			
			// Change text when user chooses their fighter and their oppenent.

			$(".Rocky, .Apollo, .Clubber, .Ivan").on('click', function() {
				if(matchup[0] === undefined) {
					$("#chooseFighter").replaceWith("<h1 id=chooseOpponent>Choose Your Opponent!</h1>");
				}
				else if(matchup[0] !== undefined) {
					$("#chooseOpponent").replaceWith("<h1 id=versusTag>VERSUS!</h1>");
				}
			})

			// When user chooses two fighters, move their divs into versus position.
			// Set matchup variables.

			RB.on('click', function() {
				if (matchup[0] === undefined) {
					$("#characterBox").append("<h3>Your Character</h3>");
					$("#characterBox").prepend(RB);
					matchup[0] = Rocky;
					index += 1;
				}
				else if (index === 1 && matchup[1] === undefined) {
					$("#VersusBox").append("<h2>VERSUS!</h2>");
					$("#opponentBox").append("<h3>Your Opponent</h3>");
					$("#opponentBox").prepend(RB);
					matchup[1] = Rocky;
					index += 1
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#opponentBox").prepend(RB);
					matchup[1] = Rocky;
					index += 1;
				}
				else if (index === 3 && matchup[1] === undefined) {
					$("#opponentBox").prepend(RB);
					matchup[1] = Rocky;
				}
				else if (matchup[0] && matchup[1] !== undefined) {
					alert("Two fighters already selected");
				}
			});

			AC.on('click', function() {
				if (matchup[0] === undefined) {
					$("#characterBox").append("<h3>Your Character</h3>");
					$("#characterBox").prepend(AC);
					matchup[0] = Apollo;
					index += 1;
				}
				else if (index === 1 && matchup[1] === undefined) {
					$("#VersusBox").append("<h2>VERSUS!</h2>");
					$("#opponentBox").append("<h3>Your Opponent</h3>");
					$("#opponentBox").prepend(AC);
					matchup[1] = Apollo;
					index += 1
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#opponentBox").prepend(AC);
					matchup[1] = Apollo;
					index += 1;
				}
				else if (index === 3 && matchup[1] === undefined) {
					$("#opponentBox").prepend(AC);
					matchup[1] = Apollo;
				}
				else if (matchup[0] && matchup[1] !== undefined) {
					alert("Two fighters already selected");
				}
			});

			CL.on('click', function() {
				if (matchup[0] === undefined) {
					$("#characterBox").append("<h3>Your Character</h3>");
					$("#characterBox").prepend(CL);
					matchup[0] = Clubber;
					index += 1;
				}
				else if (index === 1 && matchup[1] === undefined) {
					$("#VersusBox").append("<h2>VERSUS!</h2>");
					$("#opponentBox").append("<h3>Your Opponent</h3>");
					$("#opponentBox").prepend(CL);
					matchup[1] = Clubber;
					index += 1
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#opponentBox").prepend(CL);
					matchup[1] = Clubber;
					index += 1;
				}
				else if (index === 3 && matchup[1] === undefined) {
					$("#opponentBox").prepend(CL);
					matchup[1] = Clubber;
				}
				else if (matchup[0] && matchup[1] !== undefined) {
					alert("Two fighters already selected");
				}
			});

			ID.on('click', function() {
				if (matchup[0] === undefined) {
					$("#characterBox").append("<h3>Your Character</h3>");
					$("#characterBox").prepend(ID);
					matchup[0] = Ivan;
					index += 1;
				}
				else if (index === 1 && matchup[1] === undefined) {
					$("#VersusBox").append("<h2>VERSUS!</h2>");
					$("#opponentBox").append("<h3>Your Opponent</h3>");
					$("#opponentBox").prepend(ID);
					matchup[1] = Ivan;
					index += 1
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#opponentBox").prepend(ID);
					matchup[1] = Ivan;
					index += 1;
				}
				else if (index === 3 && matchup[1] === undefined) {
					$("#opponentBox").prepend(ID);
					matchup[1] = Ivan;
				}
				else if (matchup[0] && matchup[1] !== undefined) {
					alert("Two fighters already selected");
				}
			});

			// Fight mechanics.

			$("#Attackbtn").click(function() {
				if (matchup[0] === undefined && defeated < 3) {
					return alert("Choose Your Fighter!");
				}
				else if (matchup[1] === undefined && matchup[0].Health > 0 && defeated < 3) {
					return alert("Choose Your Opponent!");
				}
				else if (defeated === 3) {
					return alert("There are no more opponents, you're the CHAMP!");
				}
				else if (matchup[0].Health > 0) {
					matchup[1].Health -= matchup[0].AttackPower;
					matchup[0].Health -= matchup[1].CounterAttackPower;
					$("#FighterDmgReport").html("You Punched " + matchup[1].Name + " For " + matchup[0].AttackPower + " Damage!");
					$("#OpponentDmgReport").html(matchup[1].Name + " Counterpunched " + matchup[0].Name + " For " + matchup[1].CounterAttackPower + " Damage!")
					matchup[0].AttackPower += matchup[0].AttckIncrease;

					if (matchup[0].Name === "Rocky Balboa") {
						if (matchup[0].Health <= 0) {
							$("#FighterDmgReport").html("You Were KO'D By " + matchup[1].Name + "!");
							$("#OpponentDmgReport").html("");
							$("LetsBox").stop();
						};
						$("#RockyStats").html("Health: " + matchup[0].Health);
					}
					else if (matchup[0].Name === "Apollo Creed") {
						$("#ApolloStats").html("Health: " + matchup[0].Health);
						if (matchup[0].Health <= 0) {
							$("#FighterDmgReport").html("You Were KO'D By " + matchup[1].Name + "!");
							$("#OpponentDmgReport").html("");
							$("LetsBox").stop();
						}
					}
					else if (matchup[0].Name === "Clubber Lang") {
						$("#ClubberStats").html("Health: " + matchup[0].Health);
						if (matchup[0].Health <= 0) {
							$("#FighterDmgReport").html("You Were KO'D By " + matchup[1].Name + "!");
							$("#OpponentDmgReport").html("");
							$("LetsBox").stop();
						}
					}
					else if (matchup[0].Name === "Ivan Drago") {
						$("#IvanStats").html("Health: " + matchup[0].Health);
						if (matchup[0].Health <= 0) {
							$("#FighterDmgReport").html("You Were KO'D By " + matchup[1].Name + "!");
							$("#OpponentDmgReport").html("");
							$("LetsBox").stop();
						}
					}

					if (matchup[1].Name === "Rocky Balboa") {
						$("#RockyStats").html("Health: " + matchup[1].Health);
						if (matchup[1].Health <= 0) {
							$(".Rocky").hide();
							$("#FighterDmgReport").html("");
							$("#OpponentDmgReport").html("You KO'D " + matchup[1].Name + "!");
							$("#versusTag").replaceWith("<h1 id=chooseOpponent>Choose Your Opponent!</h1>");
							matchup[1] = undefined;
							defeated += 1;
						}
					}
					else if (matchup[1].Name === "Apollo Creed") {
						$("#ApolloStats").html("Health: " + matchup[1].Health);
						if (matchup[1].Health <= 0) {
							$(".Apollo").hide();
							$("#FighterDmgReport").html("");
							$("#OpponentDmgReport").html("You KO'D " + matchup[1].Name + "!");
							$("#versusTag").replaceWith("<h1 id=chooseOpponent>Choose Your Opponent!</h1>");
							matchup[1] = undefined;
							defeated += 1;
						}
					}
					else if (matchup[1].Name === "Clubber Lang") {
						$("#ClubberStats").html("Health: " + matchup[1].Health);
						if (matchup[1].Health <= 0) {
							$(".Clubber").hide();
							$("#FighterDmgReport").html("");
							$("#OpponentDmgReport").html("You KO'D " + matchup[1].Name + "!");
							$("#versusTag").replaceWith("<h1 id=chooseOpponent>Choose Your Opponent!</h1>");
							matchup[1] = undefined;
							defeated += 1;
						}
					}
					else if (matchup[1].Name === "Ivan Drago") {
						$("#IvanStats").html("Health: " + matchup[1].Health);
						if (matchup[1].Health <= 0) {
							$(".Ivan").hide();
							$("#FighterDmgReport").html("");
							$("#OpponentDmgReport").html("You KO'D " + matchup[1].Name + "!");
							$("#versusTag").replaceWith("<h1 id=chooseOpponent>Choose Your Opponent!</h1>");
							matchup[1] = undefined;
							defeated += 1;
						};
						console.log(defeated);
					}
				}

				// Reset the game when player is defeated

				if (matchup[0].Health <= 0) {
					ResetGame();
				}

				// Else, when player defeats all opponents, indicate win and initiate game reset.

				else if (defeated === 3  && matchup[0].Name === "Rocky Balboa" && matchup[1] === undefined) {
					$("#chooseOpponent").replaceWith("<h1 id=chooseOpponent>You Win!</h1>");
					$("#fighterRow").append(RB);
					$("#opponentBox").empty();
					$("#characterBox").empty();
					$("#versusTag").remove();
					RB.unbind();
					ResetGame();
				}
				else if (defeated === 3  && matchup[0].Name === "Apollo Creed" && matchup[1] === undefined) {
					$("#chooseOpponent").replaceWith("<h1 id=chooseOpponent>You Win!</h1>");
					$("#fighterRow").append(AC);
					$("#opponentBox").empty();
					$("#characterBox").empty();
					$("#versusTag").remove();
					AC.unbind();
					ResetGame();
				}
				else if (defeated === 3  && matchup[0].Name === "Clubber Lang" && matchup[1] === undefined) {
					$("#chooseOpponent").replaceWith("<h1 id=chooseOpponent>You Win!</h1>");
					$("#fighterRow").append(CL);
					$("#opponentBox").empty();
					$("#characterBox").empty();
					$("#versusTag").remove();
					CL.unbind();
					ResetGame();
				}
				else if (defeated === 3  && matchup[0].Name === "Ivan Drago" && matchup[1] === undefined) {
					$("#chooseOpponent").replaceWith("<h1 id=chooseOpponent>You Win!</h1>");
					$("#fighterRow").append(ID);
					$("#opponentBox").empty();
					$("#characterBox").empty();
					$("#versusTag").remove();
					ID.unbind();
					ResetGame();
				}
			});

// Function which allows player to reset the game once they are defeated 
// or when they defeat all of their opponents.

function ResetGame () {
	$("#Reset").html("<button id=ResetBtn>Reset The Game</button>")
	$("#ResetBtn").click(function() {
		location.reload();
	});
}
}
})