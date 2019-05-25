// normally the model would have more going on...
//retrieving the hikes from a database, adding hikes, editing hikes, filtering, etc.
// Our model will be very simple.  We could simply export the hikeList, but 
//a better pattern would be to create a 'getter' function to do it instead. 
//That way as our model changed...we could simply change the getter function 
//and anything using it should be able to remain the same.
const hikeList = [
    {
    name: 'Bechler Falls',
    imgSrc: 'Bfalls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
    {
    name: 'Teton Canyon',
    imgSrc: 'canyon.jpg',
    imgAlt: 'Image of Teton Canyon',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },
    {
    name: 'Dunanda Falls',
    imgSrc: 'Dfalls.jpg',
    imgAlt: 'Image of Dunanda Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    },
    {
    name: 'Bright Angel Trail',
    imgSrc: 'BrightAngel.jpg',
    imgAlt: 'Image of Bright Angel Trail',
    distance: '15.6 miles',
    difficulty: 'Hard',
    description:
        'The Bright Angel Trail is the most popular trail on the South Rim of the Grand Canyon',
    directions:
        'Located on the South Rim, trail begins just west of Bright Angel Lodge. Follow path along rim, trail starts by mule corral.'
    },
    {
    name: 'Devils Bridge',
    imgSrc: 'DevilsBridge.jpg',
    imgAlt: 'Image of Devils Bridge',
    distance: '4.2 miles',
    difficulty: 'Moderate',
    description:
        'heavily trafficked out and back trail located near Sedona, Arizona that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round.',
    directions:
        'Drive 27 miles south from Flagstaff to Sedona on US 89A. Continue through Sedona to Dry Creek Road (FR152) at the west end of town. Turn right on Dry Creek Road and drive for two miles to where FR152 forks and take the right fork (leaving the paved road). About 1.3 miles up this road, turn right to Devil\'s Bridge Trailhead and parking lot.'
    },
    {
    name: 'Horseshoe Bend',
    imgSrc: 'HorseshoeBend.jpg',
    imgAlt: 'Image of Horseshoe Bend',
    distance: '1.5 miles',
    difficulty: 'Easy',
    description:
        'A very short hike off a highway takes you to the top of a cliff overlooking Horseshoe Bend and the Colorado River over 1100 feet below.',
    directions:
        'Horseshoe Bend is just south of Page, Arizona. From the Glen Canyon Dam on US-89 head south for 5.1 miles. You’ll pass along the edge of Page, Arizona. At around 5 miles from the Glen Canyon Dam, you’ll see a sign for Horseshoe Bend Overlook. Turn right into parking area. If coming from the south, take US-89 north to Page, Arizona and before coming into town you’ll see a Horseshoe Bend Overlook sign. Turn left into the parking lot.'
    }
];
// Hike Model
export default class HikeModel {
  constructor() {
    // We need a constructor...but in this case it isn't doing much
  }
  getAllHikes() {
          return hikeList;
    }
  getHikeByName(hikeName) {
    // filter the hikes for the record identified by hikeName and return it
    let hikeRequest;
    hikeList.forEach(hike =>{if (hike.name === hikeName){hikeRequest = hike;}});
    return hikeRequest;

  }
}