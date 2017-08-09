$(document).ready(function() {

	LetsBox();

	function LetsBox() {
		var index = 0;
		var matchup = [];

		var Boxers = [{Name:"Rocky Balboa", Health:150, AttackPower:7, CounterAttackPower:7, Player:false, Opponent:false}, 
		{Name:"Apollo Creed", Health:150, AttackPower:8, CounterAttackPower:12, Player:false, Opponent:false},
		{Name:"Clubber Lang", Health:140, AttackPower:10, CounterAttackPower:10, Player:false, Opponent:false},
		{Name:"Ivan Drago", Health: 220, AttackPower: 10, CounterAttackPower:22, Player:false, Opponent:false}]

		var Rocky = Boxers[0];
		var Apollo = Boxers[1];
		var Clubber = Boxers[2];
		var Ivan = Boxers[3];

			// Create four character divs and assign class "Fighters" to each. RB=Rocky Balboa, AC=Apollo Creed, CL=Clubber Lang, and ID=Ivan Drago

			$(".col-md-12").append("<h1>ROCKY BOXING RPG!</h1>")

			RB = $("<div><h4>Rocky Balboa</h4> <img src=assets/images/Rocky.jpg alt=Rock/><h3 id=RockyStats></h3></div>").attr("class","Rocky");
			AC = $("<div><h4>Apollo Creed</h4> <img src=assets/images/Apollo.jpg alt=Creed/><h3 id=ApolloStats></h3></div>").attr("class","Apollo");
			CL = $("<div><h4>Clubber Lang</h4> <img src=assets/images/Clubber.jpg alt=Lang/><h3 id=ClubberStats></h3><h3 id=stats></h3></div>").attr("class","Clubber");
			ID = $("<div><h4>Ivan Drago</h4> <img src=assets/images/Ivan.jpg alt=Drago/><h3 id=IvanStats></h3></div>").attr("class","Ivan");
			VersusBox = $("<div></div>").attr("id","VersusBox", "class", "col-md-4");

			$("#fighterRow").append(RB, AC, CL, ID, "<h1 id=chooseFighter>Choose Your Fighter!</h1>");
			$("#VersusRow").append(VersusBox);
			$("#AttackRow").append("<button id=Attackbtn>FIGHT!</button>");

			$("#RockyStats").append("Health: " + Rocky.Health);
			$("#ApolloStats").append("Health: " + Apollo.Health);
			$("#ClubberStats").append("Health: " + Clubber.Health);
			$("#IvanStats").append("Health: " + Ivan.Health);
			
			// When user chooses two fighters, move their divs into versus position. Set data attribute to 'true' if clicked.

			$(".Rocky, .Apollo, .Clubber, .Ivan").one('click', function() {
				$("#chooseFighter").replaceWith("<h1 id=chooseOpponent>Choose Your Opponent!</h1>");
			})

			RB.one('click', function() {
				RB.data('clicked', true);
				// RB.animate({"top": "+=428px"});
				// RB.animate({"right": "-=253px"})
				if (matchup[0] === undefined || matchup[1] === undefined) {
					VersusBox.append(RB);
					index += 1;
				}
				if (index === 1) {
					Rocky.Player = true;
					matchup[0] = Rocky;
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#VersusBox").prepend("<h2>VERSUS!</h2>");
					Rocky.Opponent = true;
					matchup[1] = Rocky;
				}
				else if (index >= 3) {
					Rocky.Opponent = true;
					matchup[1] = Rocky;
				}
			});

			AC.one('click', function() {
				AC.data('clicked', true);
				// AC.animate({"top": "+=428px"});
				// AC.animate({"right": "-=2.5px"});
				if (matchup[0] === undefined || matchup[1] === undefined) {
					VersusBox.append(AC);
					index += 1;
				}
				if (index === 1) {
					Apollo.Player = true;
					matchup[0] = Apollo;
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#VersusBox").prepend("<h2>VERSUS!</h2>");
					Apollo.Opponent = true;
					matchup[1] = Apollo;
				}
				else if (index >= 3) {
					Apollo.Opponent = true;
					matchup[1] = Apollo;
				}
			});

			CL.one('click', function() {
				CL.data('clicked', true);
				// CL.animate({"top": "+=428px"});
				// CL.animate({"right": "+=2.5px"})
				if (matchup[0] === undefined || matchup[1] === undefined) {
					VersusBox.append(CL);
					index += 1;
				}
				if (index === 1) {
					Clubber.Player = true;
					matchup[0] = Clubber;
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#VersusBox").prepend("<h2>VERSUS!</h2>");
					Clubber.Opponent = true;
					matchup[1] = Clubber;
				}
				else if (index >= 3) {
					Clubber.Opponent = true;
					matchup[1] = Clubber;
				}
			});

			ID.one('click', function() {
				ID.data('clicked', true);
				// ID.animate({"top": "+=428px"});
				// ID.animate({"right": "+=253.5px"})
				if (matchup[0] === undefined || matchup[1] === undefined) {
					VersusBox.append(ID);
					index += 1;
				}
				if (index === 1) {
					Ivan.Player = true;
					matchup [0] = Ivan;
				}
				else if (index === 2 && matchup[1] === undefined) {
					$("#VersusBox").prepend("<h2>VERSUS!</h2>");
					Ivan.Opponent = true;
					matchup[1] = Ivan;
				}
				else if (index >= 3) {
					Ivan.Opponent = true;
					matchup[1] = Ivan;

				}
			});
			$("#Attackbtn").click(function() {
				if (matchup[0] === undefined) {
					return alert("Choose Your Fighter!");
				}
				else if (matchup[1] === undefined && matchup[0].Health > 0) {
					return alert("Choose Your Opponent!");
				}
				else if (matchup[0].Health > 0) {
					matchup[1].Health -= matchup[0].AttackPower;
					matchup[0].Health -= matchup[1].CounterAttackPower;
					$("#FighterDmgReport").html("You Punched " + matchup[1].Name + " For " + matchup[0].AttackPower + " Damage!");
					$("#OpponentDmgReport").html(matchup[1].Name + " Counterpunched " + matchup[0].Name + " For " + matchup[1].CounterAttackPower + " Damage!")
					matchup[0].AttackPower += 6;

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
							matchup[1] = undefined;
						}
					}
					else if (matchup[1].Name === "Apollo Creed") {
						$("#ApolloStats").html("Health: " + matchup[1].Health);
						if (matchup[1].Health <= 0) {
							$(".Apollo").hide();
							$("#FighterDmgReport").html("");
							$("#OpponentDmgReport").html("You KO'D " + matchup[1].Name + "!");
							matchup[1] = undefined;
						}
					}
					else if (matchup[1].Name === "Clubber Lang") {
						$("#ClubberStats").html("Health: " + matchup[1].Health);
						if (matchup[1].Health <= 0) {
							$(".Clubber").hide();
							$("#FighterDmgReport").html("");
							$("#OpponentDmgReport").html("You KO'D " + matchup[1].Name + "!");
							matchup[1] = undefined;
						}
					}
					else if (matchup[1].Name === "Ivan Drago") {
						$("#IvanStats").html("Health: " + matchup[1].Health);
						if (matchup[1].Health <= 0) {
							$(".Ivan").hide();
							$("#FighterDmgReport").html("");
							$("#OpponentDmgReport").html("You KO'D " + matchup[1].Name + "!");
							matchup[1] = undefined;
						};
					}

				}
				if (matchup[0].Health <= 0) {
					ResetGame();
				}
			});
			function ResetGame () {
				$("#Reset").html("<button id=ResetBtn>Reset The Game</button>")
				$("#ResetBtn").click(function() {
					location.reload();
				});
			}
		}
	})