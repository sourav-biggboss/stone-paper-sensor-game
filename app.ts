const stone_name: [0, 1, 2] = [0, 1, 2];
const matterial: ["stone", "paper", "scissor"] = ["stone", "paper", "scissor"];
let player_system;
let player_user: 0 | 1 | 2;

function SystemGuss(): number {
  const rndInt = Math.floor(Math.random() * (stone_name.length));
  return rndInt;
}

function ScoreResult(stone_name: number, result_by_her?: boolean) {
  var msg: string;
  if (typeof result_by_her === 'undefined') {
    msg = "It's a Draw 😡! My guess was " + matterial[stone_name] + "";
  }
  else if (result_by_her) {
    msg = "hahah 😀 My guess was " + matterial[stone_name] + " I win";
  }
  else if (!result_by_her) {
    msg = "Ohh My bad 😠! My guess was " + matterial[stone_name] + " you win";
  } else {
    msg = 'Dont Want 💢! to Pay With You';
  }
  document.getElementById('result').innerHTML = msg;
}

function result(player_user: number): void {
  const system_guss: number = SystemGuss();
  var system_guss_img: string,player_user_img: string;

  if (system_guss == 0) {
    system_guss_img = "img/rock.jpg";
  } else if (system_guss == 1) {
    system_guss_img = "img/paper.jpg";
  }
  else if (system_guss == 2) {
    system_guss_img = "img/scissors.jpg";
  }

  if (player_user == 0) {
    player_user_img = "img/rock.jpg";
  } else if (player_user == 1) {
    player_user_img = "img/paper.jpg";
  }
  else if (player_user == 2) {
    player_user_img = "img/scissors.jpg";
  }

  document.getElementById('computer').src = system_guss_img;
  document.getElementById('player').src = player_user_img;

  if ((system_guss - player_user) === 0) {
    ScoreResult(system_guss);
  }
  else if ((system_guss - player_user) === 1) {
    ScoreResult(system_guss, true);
  } else {
    ScoreResult(system_guss, false);
  }
}

function stone() {
  player_user = 0;
  result(player_user);
}
function paper() {
  player_user = 1;
  result(player_user);
}
function scissor() {
  player_user = 2;
  result(player_user);
}
