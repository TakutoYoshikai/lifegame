const Tribe = {
  A: "A",
  B: "B",
  C: "C",
}

const Hand = {
  Rock: "Rock",
  Paper: "Paper",
  Scissors: "Scissors"
}

function makeDefaultHands() {
  return [
    Hand.Rock,
    Hand.Rock,
    Hand.Paper,
    Hand.Paper,
    Hand.Scissors,
    Hand.Scissors
  ];
}

class Life {
  constructor(tribe) {
    this.tribe = tribe;
    this.hands = makeDefaultHands();
  }
  getHand(hand) {
    for (const [index, _hand] of in this.hands.entries()) {
      if (hand === _hand) {
        this.hands.splice(index, 1);
        return _hand;
      }
    }
    return null;
  }
  getRandomHand() {
    if (this.hands.length === 0) {
      return null;
    }
    return this.getHand(this.hands[Math.floor(Math.random() * this.hands.length)]);
  }
  battle(enemyTribe) {
    return this.getRandomHand();
  }
}

class LifeA extends Life {
  constructor() {
    super(Tribe.A);
  }
  battle(enemyTribe) {
    let hand = this.getHand(Hand.Rock);
    if (hand !== null) {
      return hand;
    }
    hand = this.getHand(Hand.Scissors);
    if (hand !== null) {
      return hand;
    }
    hand = this.getHand(Hand.Paper);
    if (hand !== null) {
      return hand;
    }
    return null;
  }
}
class LifeB extends Life {
  constructor() {
    super(Tribe.B);
  }
  battle(enemyTribe) {
    let hand = this.getHand(Hand.Paper);
    if (hand !== null) {
      return hand;
    }
    hand = this.getHand(Hand.Scissors);
    if (hand !== null) {
      return hand;
    }
    hand = this.getHand(Hand.Rock);
    if (hand !== null) {
      return hand;
    }
    return null;
  }
}
class LifeC extends Life {
  constructor() {
    super(Tribe.C);
  }

  battle(enemyTribe) {
    return this.getRandomHand();
  }
}


