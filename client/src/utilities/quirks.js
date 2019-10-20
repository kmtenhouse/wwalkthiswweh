const Quirk = require("@twinarmageddons/typing-quirk");

//Helper functions to quirkify text for each troll
export default function quirkify(character, message) {
    //takes in a string
    //attempts to find an appropriate character and return the quirkified version
    const quirk = getQuirk(character);
    return (quirk ? quirk.toQuirk(message) : message);
}

function getQuirk(character) {
    const typingQuirk = new Quirk();
    switch (character) {
        case "AA":
            typingQuirk.addSubstitution("o", "0", { ignoreCase: true });
            typingQuirk.setSentenceCase("lowercase");
            break;
        case "AT":
            break;
        case "TA":
            typingQuirk.addSubstitution("i", "ii", { ignoreCase: true });
            typingQuirk.addSubstitution("s", "2", { ignoreCase: true });
            typingQuirk.addSubstitution("together", "twogether");
            typingQuirk.addSubstitution("too", "two");
            typingQuirk.addSubstitution("to", "two");
            break;
        case "CG":
            typingQuirk.setSentenceCase("uppercase");
            break;
        case "AC":
            typingQuirk.setPrefix(":33 < ");
            typingQuirk.addSubstitution(
                {
                    patternToMatch: /3{2}/g,
                    replaceWith: "ee"
                },
                {
                    patternToMatch: /e{2}/g,
                    replaceWith: "33"
                }
            );
            break;
        case "GA":
            typingQuirk.addSubstitution("a", "4", { ignoreCase: true });
            typingQuirk.addSubstitution("e", "3", { ignoreCase: true });
            typingQuirk.addSubstitution("i", "1", { ignoreCase: true });
            typingQuirk.addEmoji(">:]");
            break;
        case "GC":
            typingQuirk.setWordCase("capitalize");
            break;
        case "AG":
            typingQuirk.addSubstitution("b", "8", { ignoreCase: true });
            break;
        case "CT":
            typingQuirk.addSubstitution("strong", "STRONG", { ignoreCase: true });
            typingQuirk.addSubstitution("strength", "STRONGNESS", { ignoreCase: true });
            typingQuirk.addSubstitution("cross", "%");
            typingQuirk.addSubstitution("loo", "100", { ignoreCase: true });
            typingQuirk.addSubstitution("ool", "001", { ignoreCase: true });
            typingQuirk.addSubstitution("x", "%", { ignoreCase: true });
            typingQuirk.setPrefix("D --> ");
            break;
        case "TC":
            typingQuirk.setSentenceCase("alternatingcaps");
            typingQuirk.addEmoji(":o)");
            typingQuirk.addEmoji("(o:");
            break;
        case "CA":
            typingQuirk.addSubstitution("w", "ww", { ignoreCase: true });
            typingQuirk.addSubstitution("v", "vv", { ignoreCase: true });
            typingQuirk.addSubstitution(
                {
                    patternToMatch: /in$/,
                    replaceWith: "ing"
                },
                {
                    patternToMatch: /ing$/,
                    replaceWith: "in"
                }
            );
            typingQuirk.addStripPattern("'");
            typingQuirk.setSentenceCase("lowercase");
            break;
        case "CC":
            typingQuirk.addSubstitution("h", ")(");
            typingQuirk.addSubstitution("E", "-E");
            typingQuirk.addEmoji("38)");
            typingQuirk.addEmoji("38(");
            typingQuirk.addEmoji("38O");
            break;
        default: return null;
    }
    return typingQuirk;
}

