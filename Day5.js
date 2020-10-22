// Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

// For example, given "aaabbc", you could return "ababac". Given "aaab", return None.

function solution(x) {
  let k = new Map();

  //storing frequency of each character and findingmax frequency
  let maxFreq = 0;
  for (let i = 0; i < x.length; i++) {
    k.set(x[i], k.get(x[i]) ? k.get(x[i]) + 1 : 1);

    if (maxFreq < k.get(x[i])) {
      maxFreq = k.get(x[i]);
    }
  }

  //checking if solution possible
  if (x.length < 2 * maxFreq - 1) {
    return "None";
  }

  let finalString = [];

  //taking each character and placing at alternate position
  //   let y = 0;
  k = new Map([...k.entries()].sort((a, b) => b[1] - a[1]));
  for (let i = 0; i < x.length; i += 1) {
    for (let key of k.keys()) {
      if (k.get(key) <= 0) return "";

      if (
        (finalString.length && finalString[finalString.length - 1] !== key) ||
        !finalString.length
      ) {
        finalString.push(key);
        k.set(key, k.get(key) - 1);
        k = new Map([...k.entries()].sort((a, b) => b[1] - a[1]));
        break;
      }
      //   y++;
    }
  }

  return finalString.join("");
}

const x1 =
  "tndsewnllhrtwsvxenkscbivijfqnysamckzoyfnapuotmdexzkkrpmppttficzerdndssuveompqkemtbwbodrhwsfpbmkafpwyedpcowruntvymxtyyejqtajkcjakghtdwmuygecjncxzcxezgecrxonnszmqmecgvqqkdagvaaucewelchsmebikscciegzoiamovdojrmmwgbxeygibxxltemfgpogjkhobmhwquizuwvhfaiavsxhiknysdghcawcrphaykyashchyomklvghkyabxatmrkmrfsppfhgrwywtlxebgzmevefcqquvhvgounldxkdzndwybxhtycmlybhaaqvodntsvfhwcuhvuccwcsxelafyzushjhfyklvghpfvknprfouevsxmcuhiiiewcluehpmzrjzffnrptwbuhnyahrbzqvirvmffbxvrmynfcnupnukayjghpusewdwrbkhvjnveuiionefmnfxao";
const sol1 = solution(x1);
console.log(sol1);

const x2 = "baaabc";
const sol2 = solution(x2);
console.log(sol2);
