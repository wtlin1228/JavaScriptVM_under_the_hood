import { Instruction } from "../instructions";

//
//
//
//
//
//
export default [
  /*  0 */ Instruction.LOAD_CONST_A0,
  /*  1 */ 23, // 13 is the address of the first element of the DATA section
  /*  2 */ Instruction.LOAD_CONST_AE0,
  /*  3 */ 0,
  /*  4 */ Instruction.GO_SUB,
  /*  5 */ 19, // Address of the subroutine
  /*  6 */ Instruction.LOAD_CONST_AE0,
  /*  7 */ 1,
  /*  8 */ Instruction.GO_SUB,
  /*  9 */ 19, // Address of the subroutine
  /* 10 */ Instruction.LOAD_CONST_AE0,
  /* 11 */ 2,
  /* 12 */ Instruction.GO_SUB,
  /* 13 */ 19, // Address of the subroutine
  /* 14 */ Instruction.LOAD_CONST_AE0,
  /* 15 */ 3,
  /* 16 */ Instruction.GO_SUB,
  /* 17 */ 19, // Address of the subroutine
  /* 18 */ Instruction.HALT,
  /* 19 */ Instruction.LOAD_VALUE_FROM_ADDR_A0_PLUS_AE0_TO_R0, // Subroutine
  /* 20 */ Instruction.INCREMENT_R0,
  /* 21 */ Instruction.STORE_R0_TO_ADDR_A0_PLUS_AE0,
  /* 22 */ Instruction.RETURN,
  /* 23 */ 10, // DATA section
  /* 24 */ 20,
  /* 25 */ 30,
  /* 26 */ 40,
  /* 27 */ 0, // STACK space
  /* 28 */ 0,
  /* 29 */ 0,
  /* 30 */ 0,
];
