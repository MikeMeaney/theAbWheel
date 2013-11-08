theAbWheel README
==========

It’s this ab fitness do-hicky whatsit I'm building. 

I mean, what else do you want to know?
Well, besides it's purpose and platform? pffffffttttt. 

--The Purpose---
Fine then Mr/Ms/Mrs/TBD "I know what I'm doing". I'm hacking the ever-living daylights out 
of an $11 abdominal roller I bought at Target (pronounced" "Thar-shay"). I'm doing this
because of a 16-week  fitness thing that the persuasive muscle-beings at BodyBuilding.com 
sold me on because my body is the weak-sauce. 

The abominal part of the work-out is pretty simple. About twice a week you subject your
self to the relentless masochism of this plastic wheel threaded through an aluminum pipe
for 100 repetitions. You kinda look like a caterpillar on a treadmill while doing it. But
the burn can be felt so hard that the mear act of counting to a hundred is a simple as 
summiting Mt. Kilimanjaro. 100 reps on this thing (for a weak beginner such as myself)
is time consuming as it is monotonous. I mean come on, can I make this into some kind of
controller for game? Or at the very least delegate the counting of reps and tracking of 
progress to the greater mind around us all that is the INTERNET?

--The platform---
On the hardware side of things there is the $11 tool of self-induced-torment, magnets,
a Hall effect sensor, and an Electric Imp. Throw in some wires, a resistor here and there,
a LED (because its an ELECTRONICS project, duh!), adhere everything with an egregious 
amount of hot-glue, stick a nine-volt battery in the damn thing, and BAM! You’ve got
your self a web-connected abdominal roller. (I swear I’ll post a schematic and photos to
one of those Instructable things when I’m less tired and drunk. Mhhh Instructable...)

The magnets have been glued to the wheel, and the hall effect sensor is stationary on the 
handle. The Electric Imp watches for pauses in the wheel’s movement. The user must pause
at the start of a rep, and when extended out until the muscles under the beer gut are going
to explode. Two pauses equate one repetition. That data is sent out to a DataBase, where 
a webpage running a script of the java variety can do the fun-time things with it such as
displaying how many reps have been completed.

--What you’ll find in this repo--

-The .nut files (yeah, I giggled when I wrote that. SO WHAT!?) for the Electric Imp’s
device and corresponding agent on the Imp servers. (hehe, “dot nut”).

-One index.html file where the data that the Imp’s agent pushes to my FireBase account is
displayed in real time.

-A single JavaScript file which really runs the whole show for the index.html file. Really,
without it, index.html would be a really, really shitty webpage (well, more so than it is now).

-The cutest damn .css file you’ve ever seen. It styles the index.html file into the sub-beta
level atrocity before you.

Bon Appetit!!
-Mike Meaney