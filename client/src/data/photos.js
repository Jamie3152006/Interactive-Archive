//photos with excerpts attatched to them
export const photos = [
    { src: '/images/Mom_Photos/mom_apartments.jpg', excerpt: 'Standing here, in front of my apartment, on my day off, I remember feeling relaxed.' },
    { src: '/images/Mom_Photos/mom_beach.jpg', excerpt: 'I remember being on break from school, my friends and I went to the beach, and I smiled carefree on that slightly windy day.'},
    { src: '/images/Mom_Photos/mom_bed.jpg', excerpt: 'This was taken in my bedroom, in my childhood home, and I remember feeling like it was any other day.'},
    { src: '/images/Mom_Photos/mom_beach_hat.jpg', excerpt: 'This was when we all went on a cruise together, me, you, and your brother, with my friends. It was my first cruise ever, and I remember feeling excited to be on the ship.'},
    { src: '/images/Mom_Photos/mom_boat.jpg', excerpt: 'This was me visiting New York, it was windy that day and I was taking the ferry, and that is all I remember.'},
    { src: '/images/Mom_Photos/mom_brick_wall.JPG', excerpt: 'This was back in China, I remember feeling slightly grumpy when I was taking this picture, but I no longer remember why.' },
    { src: '/images/Mom_Photos/mom_chair.jpg', excerpt: 'Again, this was on the cruise, I made you take the picture, remember?'},
    { src: '/images/Mom_Photos/mom_cruise_stairs.jpg', excerpt: 'Another photo from that cruise.'},
    { src: '/images/Mom_Photos/mom_disneyWorld.jpg', excerpt: 'This was back when we went to Disney World with your aunt and cousins, this was the first day.'}, 
    { src: '/images/Mom_Photos/mom_grandma.jpg', excerpt: 'This was shortly after we moved to Brooklyn, and I took this photo with your grandma, feeling both scared and excited to be in a new place.'},
    { src: '/images/Mom_Photos/mom_ID.jpg', excerpt: 'This was my student ID when I was still a student back in China. That felt like so long ago now.'},
    { src: '/images/Mom_Photos/mom_KFC.JPG', excerpt: 'Your aunt and I decided to go have lunch at KFC this day, we must have been on break from school.'},
    { src: '/images/Mom_Photos/mom_lion_statue.jpg', excerpt: 'This was a short field trip my class took back when I was in school, probably around middle school or early high school. I remember having fun with my friends and classmates that day.'},
    { src: '/images/Mom_Photos/mom_metal_fence.jpg', excerpt: 'Another picture of me in New York, that same day that I had a day off.'},
    { src: '/images/Mom_Photos/mom_OU.jpg', excerpt: 'This was back when I first moved to Oklahoma after marrying your dad, I took this photo to remember the day I first visited the campus of OU.'},
    { src: '/images/Mom_Photos/mom_palm_tree.JPG', excerpt: 'This is another photo of me and your aunt on break from school, we must have been just hanging out and enjoying the day.'},
    { src: '/images/Mom_Photos/mom_peace_sign.jpg', excerpt: 'This is a random photo I think either your brother or you took of me when you were really young, I look silly here haha.'}, 
    { src: '/images/Mom_Photos/mom_poster.jpg', excerpt: 'This was a photo I took of myself in my New York City bedroom, I don\'t remember why I took this photo.'},
    { src: '/images/Mom_Photos/mom_purpleDress.jpg', excerpt: 'This was a photo taken of me at a party or gathering of some sorts, I remember feeling pretty here.'},
    { src: '/images/Mom_Photos/mom_purpleShirt.jpg', excerpt: 'This was a selfie I took after a New Year\'s party, at the very end of the night.'}, 
    { src: '/images/Mom_Photos/mom_red_jacket.jpg', excerpt: 'This was me back in China, I think your grandma took this photo of me, just randomly.'},
    { src: '/images/Mom_Photos/mom_red_pjs.jpg', excerpt: 'This was around Christmas time one year, and I was just randomly taking photos of myself in my red pajamas because I thought they were fun.'},
    { src: '/images/Mom_Photos/mom_red_shirt_livingRoom.jpg', excerpt: 'Another random selfie I took of myself.'},
    { src: '/images/Mom_Photos/mom_redDress.jpg', excerpt: 'This was taken on that cruise again, I think it was actually you who took this photo.'},
    { src: '/images/Mom_Photos/mom_rockwall.jpg', excerpt: 'This was back in China, I was traveling to go visit my grandparents who lived on top of the mountains, and along the way, I took this photo of myself in front of a rock wall.'},
    { src: '/images/Mom_Photos/mom_stairs.jpg', excerpt: 'This was taken in front of our apartment in Brooklyn, a casual photo of teenage me.'}, 
    { src: '/images/Mom_Photos/mom_stone_gate.jpg', excerpt: 'This was also taken in New York, I think this was maybe in front of our apartment complex? I don/t really remember now.'},
    { src: '/images/Mom_Photos/mom_stores.jpg', excerpt: 'This was taken in front of a strip of shopping stores in New York, I remember just walking around that day on my day off and looking at different stores.'},
    { src: '/images/Mom_Photos/mom_streets.jpg', excerpt: 'This was taken in front of the Warner Brother/s building in New York, I remember walking around in the busy streets.'},
    { src: '/images/Mom_Photos/mom_sunBathing.jpg', excerpt: 'This was me sunbathing on the cruise, feeling relaxed and enjoying the sun.'}, 
    { src: '/images/Mom_Photos/mom_swimSuit.jpg', excerpt: 'This is me showing of the swimsuit I was wearing on the cruise.'},
    { src: '/images/Mom_Photos/mom_uncle.jpg', excerpt: 'This was me and your uncle, standing on the street in front of our neighborhood in Brooklyn. We look so young here.'},
    { src: '/images/Mom_Photos/mom_white_fence.jpg', excerpt: 'Another photo of me in New York, I remember feeling confident that day and was excited to be out.'},
    { src: '/images/Mom_Photos/mom_white_turtleneck.jpg', excerpt: 'This was another photo of me in my New York bedroom. Don/t you think I look nice here with the turtlneck?'},
    { src: '/images/Mom_Photos/Mom_with_friend.jpg', excerpt: 'I met up with my friend after a while of not seeing each other, this was in New York, in front of the Brooklyn Bridge.'},
    { src: '/images/Mom_Photos/mom_yellow_building.jpg', excerpt: 'Another photo of me on that school trip I took back when I was in school in China.'},
    { src: '/images/Mom_Photos/toddler_mom.jpg', excerpt: 'A very old photo of me and your aunt when we were toddlers. Oh my god, look how little we were! Time really goes by fast.'}
];

// derived helpers so existing code keeps working
export const images = photos.map((p) => p.src);

export const getExcerpt = (src) =>
  photos.find((p) => p.src === src)?.excerpt || 'No note for this photo yet.';