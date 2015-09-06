//Jumper v0.1
var alwaysJump = true;

var pos = {
  x: getPlayerX(),
  y: getPlayerY(),
  z: getPlayerZ(),
  p: getPlayerEnt()
};

var jBlock = [
  {id: 0, height: 0},
  {id: 0, height: 0},
  {id: 0, height: 0},
  {id: 0, height: 0},
  {id: 0, height: 0}
];

function procCmd(cmd) {
  var command = cmd.split(' ');
  if (command[0] == 'jumper') {
    switch (command[1]) {
      case 'set':
        if (command[2] > 5 || command[2] < 0) {
          clientMessage(ChatColor.RED + '당신이 지정할 수 있는 블럭 저장소는 0~4입니다.');
          break;
        }
        if (jBlock[command[2].id] !== 0)
          clientMessage(ChatColor.RED + '그 변수는 이미 지정되어 있으며,' + command[3] + '으로 변경됩니다.');
        if (command[4] === 0)
          clientMessage(ChatColor.RED + '점프되는 높이를 추가해주세요!');
        jBlock[command[2].id] = command[3];
        jBlock[command[2].height] = command[4];
        clientMessage(ChatColor.GREEN + '설정이 저장되었습니다!');
        break;
        case 'turn':
        if (command[3] == 'on') {
          alwaysJump = true;
          clientMessage(ChatColor.GREEN + '설정이 변경되었습니다!');
        } else {
          alwaysJump = false;
          clientMessage(ChatColor.GREEN + '설정이 변경되었습니다!');
        }
        break;
      default:
        clientMessage(ChatColor.BLUE + 'Jumper(Trampoline) v0.1 by Mike C.');
    }
  }
}

function jump() {
  for (var i = 0; i < jBlock.length; i++) {
    if (getTile(pos.x, pos.y, pos.z) == jBlock[i.id]) {
      setVelY(pos.p, jBlock[i.height]);
    }
  }
}

function modTick() {
  if (alwaysJump === true) {
    jump();
  }
}
