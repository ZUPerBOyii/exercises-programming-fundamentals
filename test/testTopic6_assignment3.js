import assert from "assert";

import {
  reverse,
  isPalindrome,
  substringOfLength,
  find,
  findAll,
  replace,
  decompose
} from "../exercises/topic06_functions/assignment03_strings2.js";



describe("6 Functions", function () {
  describe("3 # Assignment 3: Advanced text functions", function () {
    describe("Reverse", function (){
      it("Empty", function () {
        assert.strictEqual(reverse(""), "");
      });

      it("Non empty", function () {
        assert.strictEqual(reverse("bal"), "lab");
      });
    });

    describe("Palindrome", function (){
      it("Palindrome", function () {
        assert.ok(isPalindrome("aibohphobia"));
      });

      it("Empty string is a Palindrome", function () {
        assert.ok(isPalindrome(""));
      });

      it("Not a Palindrome", function () {
        assert.ok(!isPalindrome("bal"));
      });
    });

    describe("Substring (of length)", function (){
      it("Simple", function () {
        assert.strictEqual(substringOfLength("voetbalveld", 0, 0),"");
        assert.strictEqual(substringOfLength("voetbalveld", 0, 4),"voet");
        assert.strictEqual(substringOfLength("voetbalveld", 4, 3), "bal");
        assert.strictEqual(substringOfLength("voetbalveld", 7, 4),"veld");
      });

      it("Too far or too long", function () {
        assert.strictEqual(substringOfLength("voetbalveld", 11, 1),"");
        assert.strictEqual(substringOfLength("voetbalveld", 10, 2),"d");
      });

      it("Negative start", function (){
        assert.strictEqual(substringOfLength("voetbalveld", -11, 4),"voet");
        assert.strictEqual(substringOfLength("voetbalveld", -7, 3),"bal");
      });

      it("Negative length", function (){

        assert.strictEqual(substringOfLength("voetbalveld", 7, -3),"bal");
        assert.strictEqual(substringOfLength("voetbalveld", 0, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", 11, -4),"veld");
      });

      it("Negative values", function (){
        assert.strictEqual(substringOfLength("voetbalveld", -11, 4),"voet");
        assert.strictEqual(substringOfLength("voetbalveld", -7, 3),"bal");

        assert.strictEqual(substringOfLength("voetbalveld", 7, -3),"bal");
        assert.strictEqual(substringOfLength("voetbalveld", 0, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", 11, -4),"veld");

        assert.strictEqual(substringOfLength("voetbalveld", -11, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", -15, -1),"");
        assert.strictEqual(substringOfLength("voetbalveld", -4, -3),"bal");
      });
    });

    describe("Find", function (){
      it("Find", function () {
        assert.strictEqual(find("bal", "voetbalbal"),4);
        assert.strictEqual(find("haha", "hahaha"),0);
        assert.strictEqual(find("haha", "ha"),-1);
      });

      it("Find from", function () {
        assert.strictEqual(find("bal", "voetbalbal", 4),4);
        assert.strictEqual(find("bal", "voetbalbal", 5),7);
        assert.strictEqual(find("haha", "hahaha", 1),2);
        assert.strictEqual(find("haha", "hahaha", 3),-1);
      });
    });

    describe("Find All", function (){
      it("Find all", function () {
        assert.deepStrictEqual(findAll("ha", "hahaha"), [0, 2, 4]);
        assert.deepStrictEqual(findAll("haha", "hahaha"),[0, 2]);
        assert.deepStrictEqual(findAll("haha", "hahahihahahahihiha"), [0, 6, 8]);
      });

      it("Find all with explicit overlap", function () {
        assert.deepStrictEqual(findAll("ha", "hahaha", true), [0, 2, 4]);
        assert.deepStrictEqual(findAll("haha", "hahaha", true),[0, 2]);
        assert.deepStrictEqual(findAll("haha", "hahahihahahahihiha", true), [0, 6, 8]);
      });

      it("Find all without overlap", function () {
        assert.deepStrictEqual(findAll("haha", "hahaha", false),[0]);
        assert.deepStrictEqual(findAll("haha", "hahahihahahahihiha", false),[0, 6]);
      });
    });

    describe("Replace", function (){
      it("replace", function () {
        assert.strictEqual( replace("bal", "lob", "voetbalbal"), "voetloblob");
        assert.strictEqual( replace("bal", "", "voetbalbal"),"voet");
        assert.strictEqual( replace("voet", "", "voetbalbal"),"balbal");
        assert.strictEqual( replace("sok", "lob", "voetbalbal"),"voetbalbal");
        assert.strictEqual(replace("haha", "hoho", "hahaha"), "hohoha");
      });
    });

    describe("Decompose", function (){
      it("decompose", function () {
        assert.deepStrictEqual( decompose(30201), [1, 0, 2, 0, 3]);
      });
    });
  });

});
