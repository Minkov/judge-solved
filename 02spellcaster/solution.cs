using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SpellCaster.Task
{
    public class Solution
    {
        public static void Main()
        {
            var message = Console.ReadLine();
            var words = message.Split(' ').ToList();

            var extractedLetters = ExtractLetters(words);
            var movedLetters = MoveLetters(extractedLetters);

            Console.WriteLine(movedLetters);
        }

        private static StringBuilder ExtractLetters(IList<string> words)
        {
            var extractedLetters = new StringBuilder();
            var maxWordLenght = words.Select(x => x.Length).Max();

            for (int characterIndex = 0; characterIndex < maxWordLenght; characterIndex++)
            {
                for (int wordIndex = 0; wordIndex < words.Count; wordIndex++)
                {
                    if (characterIndex < words[wordIndex].Length)
                    {
                        var index = words[wordIndex].Length - 1 - characterIndex;
                        extractedLetters.Append(words[wordIndex][index]);
                    }
                }
            }

            return extractedLetters;
        }

        private static string MoveLetters(StringBuilder extractedLetters)
        {
            var movedLetters = new StringBuilder();

            for (int characterIndex = 0; characterIndex < extractedLetters.Length; characterIndex++)
            {
                char character = extractedLetters[characterIndex];

                var index = char.ToLower(character) - 'a' + 1;
                var mover = (index + characterIndex) % extractedLetters.Length;

                extractedLetters.Remove(characterIndex, 1);
                extractedLetters.Insert(mover, character);
            }

            return extractedLetters.ToString();
        }
    }
}

