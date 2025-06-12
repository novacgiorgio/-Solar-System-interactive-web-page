
//INFORMATIONS
const info = [
    //SUN
    { 
        planeta:"The Sun",
        type:"Type: Main sequence star, spectral class G2V",
        age : "Age: 4.6 billion years",
        composition: "Composition: 74% hydrogen, 24% helium, 2% other elements (carbon, oxygen, iron, etc.)",
        temperature : "Temperature: ~5,500°C at the surface (photosphere), ~15,000,000°C in the core",
        energy : "Energy: Produces energy through nuclear fusion,(hydrogen combining into helium)",
        mass : "Mass: 1.989 x 10^30 kg (99.86% of the Solar System's mass) ",
        diameter : "Diameter: ~1,391,000 km",
        luminosity : "Luminosity: ~3.828 x 10^26 W",
        influence : "Influence: Gravitationally governs the entire Solar System, maintaining the planets' orbits",
        phenomena : "Phenomena: Sunspots, solar flares, solar wind (continuous flow of charged particles)",
        fact : "Interesting fact: The Sun contains 99.86% of the total mass of the Solar System and has a layered structure (core, radiative zone, convective zone, photosphere, chromosphere, corona)",
    },
    //MERCURY
    {
        planeta:"Mercury",
        type:"Type: Terrestrial planet, closest to the Sun",
        age : "Age: N/A",
        composition: "Composition: large iron core (~85% of planet radius), silicate mantle and crust",
        temperature : "Temperature: -180°C at night, +430°C during day (extreme due to very thin atmosphere)",
        energy : "Energy: N/A",
        mass : "Mass: 3.30 x 10^23 kg (~5.5% of Earth's mass)",
        diameter : "Diameter: ~4,880 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: N/A",
        phenomena : "Phenomena: heavily cratered surface, extreme temperature variation",
        fact : "Fun fact: has the largest proportional core of all planets (almost 85% of radius)",
    },
    //VENUS
    {
        planeta:"Venus",
        type:"Type: Terrestrial planet, known as Earth's “sister planet”",
        age : "Age: N/A",
        composition: "Composition: mostly carbon dioxide atmosphere (~96%), thick clouds of sulfuric acid",
        temperature : "Temperature: ~464°C, hottest planet due to extreme greenhouse effect",
        energy : "Energy: N/A",
        mass : "Mass: 4.87 x 10^24 kg (~81.5% of Earth's mass)",
        diameter : "Diameter: ~12,104 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: N/A",
        phenomena : "Phenomena: retrograde rotation, very dense atmosphere with high pressure (~92 times Earth's)",
        fact : "Fun fact: one day is longer than one year due to slow retrograde rotation",
    },
    //EARTH
    {
        planeta:"Earth",
        type:"Type: Terrestrial planet, only known to support life",
        age : "Age: ~4.54 billion years",
        composition: "Composition: nitrogen (~78%), oxygen (~21%), traces of argon, CO₂, water vapor",
        temperature : "Temperature: average ~15°C",
        energy : "Energy: N/A",
        mass : "Mass: 5.97 x 10^24 kg",
        diameter : "Diameter: ~12,742 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: maintains a magnetic field protecting life from solar radiation",
        phenomena : "Phenomena: complex biosphere, plate tectonics, weather systems",
        fact : "Fun fact: has one moon (Luna) and a protective magnetic field",
    },
    //MARS
    {
        planeta:"Mars",
        type:"Type: Terrestrial planet, known as the “Red Planet”",
        age : "Age: N/A",
        composition: "Composition: thin atmosphere mostly CO₂ (~95%), nitrogen, argon",
        temperature : "Temperature: -143°C at night, up to +20°C during day",
        energy : "Energy: N/A",
        mass : "Mass: 6.42 x 10^23 kg (~10.7% of Earth's mass)",
        diameter : "Diameter: ~6,779 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: N/A",
        phenomena : "Phenomena: largest volcano (Olympus Mons), largest canyon (Valles Marineris)",
        fact : "Fun fact: has 2 moons (Phobos and Deimos)",
    },
    //JUPITER
    {
        planeta:"Jupiter",
        type:"Type: Gas giant, largest planet in the Solar System",
        age : "Age: N/A",
        composition: "Composition: hydrogen (~90%), helium (~10%), traces of methane and ammonia",
        temperature : "Temperature: -145°C in upper atmosphere",
        energy : "Energy: N/A",
        mass : "Mass: 1.90 x 10^27 kg (318 times Earth's mass)",
        diameter : "Diameter: ~142,984 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: strong gravitational influence on many moons and small bodies",
        phenomena : "Phenomena: Great Red Spot (large, long-lasting storm)",
        fact : "Fun fact: has 95 known moons, including Ganymede, largest moon in Solar System",
    },
    //SATURN
    {
        planeta:"Saturn",
        type:"Type: Gas giant, famous for its spectacular rings",
        age : "Age: N/A",
        composition: "Composition: hydrogen, helium, traces of methane and ammonia",
        temperature : "Temperature: -178°C",
        energy : "Energy: N/A",
        mass : "Mass: 5.68 x 10^26 kg",
        diameter : "Diameter: ~120,536 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: strong gravitational influence on rings and moons",
        phenomena : "Phenomena: extensive ring system composed of ice and rock particles",
        fact : "Fun fact: Titan is the only moon with a dense atmosphere",
    },
    //URANUS
    {
        planeta:"Uranus",
        type:"Type: Ice giant gas planet",
        age : "Age: N/A",
        composition: "Composition: hydrogen, helium, methane (gives blue-green color)",
        temperature : "Temperature: -195°C",
        energy : "Energy: N/A",
        mass : "Mass: 8.68 x 10^25 kg",
        diameter : "Diameter: ~50,724 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: N/A",
        phenomena : "Phenomena: extreme axial tilt of 98°, rolls on its orbit",
        fact : "Fun fact: has 27 known moons",
    },
    //NEPTUNE
    {
        planeta:"Neptune",
        type:"Type: Ice giant gas planet",
        age : "Age: N/A",
        composition: "Composition: hydrogen, helium, methane (gives blue color by absorbing red light)",
        temperature : "Temperature: -201°C",
        energy : "Energy: N/A",
        mass : "Mass: 1.02 x 10^26 kg",
        diameter : "Diameter: ~49,244 km",
        luminosity : "Luminosity: N/A",
        influence : "Influence: N/A",
        phenomena : "Phenomena: fastest winds in the Solar System (>2,000 km/h)",
        fact : "Fun fact: Triton is the largest moon, with active volcanism",
    },
]

//INFO CONST
const planeta = document.getElementById("planeta");
const type = document.getElementById("type");
const age = document.getElementById("age");
const composition = document.getElementById("composition");
const temperature = document.getElementById("temperature");
const energy = document.getElementById("energy");
const mass = document.getElementById("mass");
const diameter = document.getElementById("diameter");
const luminosity = document.getElementById("luminosity");
const influence = document.getElementById("influence");
const phenomena = document.getElementById("phenomena");
const funFact = document.getElementById("funFact");

//FUNCTIONS 
const nextBTN = document.getElementById("nextBTN");
const beforeBTN = document.getElementById("beforeBTN");
let currentIndex = 0;
nextBTN.onclick = function(){
    currentIndex++;
    const q = info[currentIndex];
    planeta.textContent = q.planeta;
    type.textContent = q.type;
    age.textContent = q.age;
    composition.textContent = q.composition;
    temperature.textContent = q.temperature;
    energy.textContent = q.energy;
    mass.textContent = q.mass;
    diameter.textContent = q.diameter;
    luminosity.textContent = q.luminosity;
    influence.textContent = q.influence;
    phenomena.textContent = q.phenomena;
    funFact.textContent = q.fact;
    document.body.style.transition = "background 0.4s";

}

beforeBTN.onclick = function(){
    currentIndex--;
    const q = info[currentIndex];
    planeta.textContent = q.planeta;
    type.textContent = q.type;
    age.textContent = q.age;
    composition.textContent = q.composition;
    temperature.textContent = q.temperature;
    energy.textContent = q.energy;
    mass.textContent = q.mass;
    diameter.textContent = q.diameter;
    luminosity.textContent = q.luminosity;
    influence.textContent = q.influence;
    phenomena.textContent = q.phenomena;
    funFact.textContent = q.fact;
    document.body.style.transition = "background 0.4s";
}





