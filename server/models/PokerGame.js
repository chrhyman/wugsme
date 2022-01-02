import mongoose from "mongoose";

const pokerGameSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectID,
    required: true,
  },
  creditsInCents: Number,
  bet: {
    type: Number,
    default: 0,
  },
  creditDenom: String,
  cards: String,
  outcome: String,
});

const PokerGame = mongoose.Model("PokerGame", pokerGameSchema);

export default PokerGame;
