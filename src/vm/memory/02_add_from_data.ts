import { Instruction } from "../instructions";

export default [
  /*  0 */ Instruction.LOAD_CONST_A0,
  /*  1 */ 13, // 13 is the address of the first element of the DATA section
  /*  2 */ Instruction.LOAD_CONST_AE0,
  /*  3 */ 0,
  /*  4 */ Instruction.LOAD_VALUE_FROM_ADDR_A0_PLUS_AE0_TO_R0,
  /*  5 */ Instruction.LOAD_CONST_AE0,
  /*  6 */ 1,
  /*  7 */ Instruction.LOAD_VALUE_FROM_ADDR_A0_PLUS_AE0_TO_R1,
  /*  8 */ Instruction.ADD_R1_TO_R0,
  /*  9 */ Instruction.LOAD_CONST_AE0,
  /* 10 */ 2,
  /* 11 */ Instruction.STORE_R0_TO_ADDR_A0_PLUS_AE0,
  /* 12 */ Instruction.HALT,
  /* 13 */ 3, // DATA section
  /* 14 */ 5,
  /* 15 */ 0,
];
