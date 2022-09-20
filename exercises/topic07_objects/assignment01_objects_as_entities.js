/*
Objects can be used to represent 'instances' of real world and/or tangible entities.
These objects can be homogenous but are often heterogeneous, especially the values will often have different types.

You will often have to create new objects, and they often occur in arrays with similarly structured objects...

For this assignment we will be working with two kinds of objects: one that represents colors (RGB) and
one that represents people (name and age and favorite color). First create the functions `createRGBColor` and
`createPerson`.

Two colors are the same if all three components (red, green, and blue) are the same. But to compute how similar
two colors are that is a bit more difficult. One of the most simple techniques is to compute the sum of squares of
the differences within each color-component. Implement this in the function `colorDistance`.

Now create a function `findMatch` that takes one person (the one who seeks a match) and an array of persons (the possible matches)
and finds the best match for that person. The best match is the person who has a favorite colour that is the most similar to the
favorite colour of the match seeker.

*/

export {createRGBColor,createPerson, colorDistance, findMatch};
