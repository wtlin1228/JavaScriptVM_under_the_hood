import {
  addrOf,
  compile,
  goSub,
  halt,
  label,
  load_A0,
  load_AE0,
  subroutine,
} from "../compiler";
import { Instruction } from "../instructions";

export default compile([
  /*  0 */ load_A0(addrOf("DATA")),
  /*  1 */ load_AE0(0),
  /*  2 */ goSub(addrOf("increment")),
  /*  3 */ load_AE0(1),
  /*  4 */ goSub(addrOf("increment")),
  /*  5 */ load_AE0(2),
  /*  6 */ goSub(addrOf("increment")),
  /*  7 */ load_AE0(3),
  /*  8 */ goSub(addrOf("increment")),
  /*  9 */ halt(),
  /* 10 */ subroutine(label("increment"), [
  /* 11 */   Instruction.LOAD_VALUE_FROM_ADDR_A0_PLUS_AE0_TO_R0,
  /* 12 */   Instruction.INCREMENT_R0,
  /* 13 */   Instruction.STORE_R0_TO_ADDR_A0_PLUS_AE0,
  /* 14 */ ]),
  /* 15 */ label("DATA"),
  /* 16 */ 10, // DATA section
  /* 17 */ 20,
  /* 18 */ 30,
  /* 19 */ 40,
  /* 20 */ label("STACK"),
  /* 21 */ 0, // STACK space
  /* 22 */ 0,
  /* 23 */ 0,
  /* 24 */ 0,
]);
