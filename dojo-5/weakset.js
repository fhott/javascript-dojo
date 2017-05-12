// By definition, WeakSet has only three key functionalities
//
// Weakly link an object into the set
// Remove a link to an object from the set
// Check if an object has already been linked to the set
// Sounds more pretty familiar?
//
// In some application, developers may need to implement a quick way to iterate through a series of data which is polluted by lots and lots of redundancy but you want to pick only ones which have not been processed before (unique). WeakSet could help you. See an example below:

var processedBag = new WeakSet();
var nextObject = getNext();
while (nextObject !== null){
    // Check if already processed this similar object?
    if (!processedBag.has(nextObject)){
        // If not, process it and memorize
        process(nextObject);
        processedBag.add(nextObject);
    }
    nextObject = getNext();
}
// One of the best data structure for application above is Bloom filter which is very good for a massive data size. However, you can apply the use of WeakSet for this purpose as well.
