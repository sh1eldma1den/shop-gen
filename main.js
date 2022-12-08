const magicItems = [
	"Adamantine Armor",
	"Amulet of Health",
	"Amulet of Proof against Detection and Location",
	"Amulet of the Planes",
	"Animated Shield",
	"Apparatus of the Crab",
	"Armor of Invulnerability",
	"Armor of Resistance",
	"Armor of Vulnerability",
	"Arrow-Catching Shield",
	"Arrow of Slaying",
	"Bag of Beans",
	"Bag of Devouring",
	"Bag of Holding",
	"Bag of Tricks",
	"Bead of Force",
	"Belt of Dwarvenkind",
	"Belt of Giant Strength",
	"Berserker Axe",
	"Boots of Elvenkind",
	"Bowl of Commanding Water Elementals",
	"Bracers of Archery",
	"Bracers of Defense",
	"Brazier of Commanding Fire Elementals",
	"Brooch of Shielding",
	"Broom of Flying",
	"Candle of Invocation",
	"Cape of the Mountebank",
	"Carpet of Flying",
	"Censer of Controlling Air Elementals",
	"Chime of Opening",
	"Circlet of Blasting",
	"Cloak of Arachnida",
	"Cloak of Displacement",
	"Cloak of Elvenkind",
	"Cloak of Protection",
	"Cloak of the Bat",
	"Cloak of the Manta Ray",
	"Crystal Ball",
	"Cube of Force", 
	"Cubic Gate",
	"Dagger of Venom",
	"Dancing Sword",
	"Decanter of Endless Water",
	"Deck of Illusions",
	"Deck of Many Things",
	"Defender",
	"Demon Armor",
	"Dimensional Shackles",
	"Dragon Scale Mail",
	"Dragon Slayer",
	"Dust of Disappearance",
	"Dust of Dryness",
	"Dust of Sneezing and Choking",
	"Dwarven Plate",
	"Dwarven Thrower",
	"Efficient Quiver",
	"Efreeti Bottle",
	"Elemental Gem",
	"Elven Chain",
	"Eversmoking Bottle",
	"Eyes of Charming",
	"Eyes of Minute Seeing",
	"Eyes of the Eagle",
	"Feather Token",
	"Figurine of Wondrous Power",
	"Flame Tongue",
	"Folding Boat",
	"Frost Brand",
	"Gauntlets of Ogre Power",
	"Gem of Brightness",
	"Gem of Seeing",
	"Giant Slayer",
	"Glamoured Studded Leather",
	"Gloves of Missile Snaring",
	"Gloves of Swimmiing and Climbing",
	"Goggles of Night",
	"Hammer of Thunderbolts",
	"Handy Haversack",
	"Hat of Disguise",
	"Headband of Intellect",
	"Helm of Brilliance",
	"Helm of Comprehending Languages",
	"Helm of Telepathy",
	"Helm of Teleportation",
	"Holy Avenger",
	"Horn of Blasting",
	"Horn of Valhalla",
	"Horseshoes of a Zephyr",
	"Horseshoes of Speed",
	"Immovable Rod",
	"Instant Fortress",
	"Ioun Stone",
	"Iron Bands of Binding",
	"Iron Flask",
	"Javelin of Lightning",
	"Lantern of Revealing",
	"Luck Blade",
	"Mace of Disruption",
	"Mace of Smiting",
	"Mace of Terror",
	"Mantel of Spell Resistance",
	"Manual of Bodily Health",
	"Manual of Gainful Exercise",
	"Manual of Golems",
	"Manual of Quickness of Action",
	"Marvelous Pigments",
	"Medallion of Thoughts",
	"Mirror of Life Trapping",
	"Mithral Armor",
	"Necklace of Adaptation",
	"Necklace of Fireballs",
	"Necklace of Prayer Beads",
	"Nine Lives Stealer",
	"Oathbow",
	"Oil of Etherealness",
	"Oil of Sharpness",
	"Oil of Slipperiness",
	"Orb of Dragonkind",
	"Pearl of Power",
	"Periapt of Health",
	"Periapt of Proof Against Poison",
	"Periapt of Wound Closure",
	"Philter of Love",
	"Pipes of Haunting",
	"Pipes of the Sewers",
	"Plate Armor of Etherealness",
	"Portable Hole",
	"Potion of Animal Friendship",
	"Potion of Clairvoyance",
	"Potion of Climbing",
	"Potion of Diminution",
	"Potion of Flying",
	"Potion of Gaseous Form",
	"Potion of Giant Strength",
	"Potion of Growth",
	"Potion of Healing",
	"Potion of Heroism",
	"Potion of Invisibility",
	"Potion of Mind Reading",
	"Potion of Poison",
	"Potion of Resistance",
	"Potion of Speed",
	"Potion of Water Breathing",
	"Restorative Ointment",
	"Ring of Animal Influence",
	"Ring of Djinni Summoning",
	"Ring of Elemental Command",
	"Ring of Evasion",
	"Ring of Feather Falling",
	"Ring of Free Action",
	"Ring of Invisibility",
	"Ring of Jumping",
	"Ring of Mind Shielding",
	"Ring of Protection",
	"Ring of Regeneration",
	"Ring of Resistance",
	"Ring of Shooting Stars",
	"Ring of Spell Storing",
	"Ring of Spell Turning",
	"Ring of Swimming",
	"Ring of Telekinesis",
	"Ring of the Ram",
	"Ring of Three Wishes",
	"Ring of Warmth",
	"Ring of Water Walking",
	"Ring of X-ray Vision",
	"Robe of Eyes",
	"Robe of Scintillating Colors",
	"Robe of Stars",
	"Robe of the Archmagi",
	"Robe of Useful Items",
	"Rod of Absorption",
	"Rod of Alertness",
	"Rod of the Lordly Might",
	"Rod of Rulership",
	"Rod of Security",
	"Rope of Climbing",
	"Scarab of Protection",
	"Scimitar of Speed",
	"Shield of Missile Attraction",
	"Slippers of Spider Clibing",
	"Sovereign Glue",
	"Spell Scroll",
	"Spellguard Shield",
	"Sphere of Annihilation",
	"Staff of Charming",
	"Staff of Fire",
	"Staff of Frost",
	"Staff of Healing",
	"Staff of Power",
	"Staff of Striking",
	"Staff of Swarming Insects",
	"Staff of the Magi",
	"Staff of the Python",
	"Staff of the Woodlands",
	"Staff of Thunder and Lightning",
	"Staff of Withering",
	"Stone of Controlling Earth Elementals",
	"Stone of Good Luck (Luckstone)",
	"Sun Blade",
	"Sword of Life Stealing",
	"Sword of Sharpness",
	"Sword of Wounding",
	"Talisman of Pure Good",
	"Talisman of the Sphere",
	"Talisman of Ultimate Evil",
	"Tome of Clear Thought",		
	"Tome of Leadership and Influence",
	"Tome of Understanding",
	"Trident of Fish Command",
	"Universal Solvent",
	"Vicious Weapon",
	"Vorpal Sword",
	"Wand of Blinding",
	"Wand of Enemy Detection",
	"Wand of Fear",
	"Wand of Fireballs",
	"Wand of Lightning Bolts",
	"Wand of Magic Detection",
	"Wand of Magic Missiles",
	"Wand of Paralysis",
	"Wand of Polymorph",
	"Wand of Secrets",
	"Wand of the War Mage +1",
	"Wand of the War Mage +2",
	"Wand of the War Mage +3",
	"Wand of Web",
	"Wand of Wonder",
	"Well of Many Worlds",
	"Wind Fan",
	"Winged Boots",
	"Wings of Flying",];

const weapons = [
	 		"Club",
			"Dagger",
			"Greatclub",
			"Handaxe",
			"Javelin",
			"Light Hammer",
			"Mace",
			"Quarterstaff",
			"Sickle",
			"Spear",
			"Light Crossbow",
			"Dart",
			"Shortbow",
			"Sling",
			"Battleaxe",
			"Flail",
			"Glaive",
			"Greataxe",
			"Greatsword",
			"Halberd",
			"Lance",
			"Longsword",
			"Maul",
			"Morningstar",
			"Pike",
			"Rapier",
			"Scimitar",
			"Shortsword",
			 "Trident",
			 "War Pick",
			 "Warhammer",
			 "Whip",
			 "Blowgun",
			 "Hand Crossbow",
			 "Heavy Crossbow",
			 "Longbow",
			 "Net",];

const armor = [
		"Padded armor",
		  "Leather armor",
		  "Studded leather armor",
		  "Hide Armor",
		  "Chain Shirt",
		  "Scale Mail",
		  "Breastplate",
		  "Half Plate",
		  "Ring Mail",
		  "Chain Mail",
		  "Splint",
		  "Plate Mail",
		  "Mage Armor",
		  "Shield",];

const miscItems = [
	"A moldy piece of cheese",
    "Seven marshmallows",
    "A set of repair tools",
    "A small cart",
    "Four feathers",
    "BLT sandwiches",
    "Roast turkey legs",
    "A parchment and quill set",
    "An ordinary, but rather debonair-looking cloak",
    "A black cane with an ivory handle carved in the shape of a howling wolf",
    "A purple fedora",
    "A statue of a Mother Goddess, carved out of redwood",
    "A flask of dark whiskey",
    "A medical bag, full of supplies",
    "An adolescent kangaroo named Gilberto",
    "A pot of ink",
    "Two small, matching red jewels carved in the shape of eyes",
    "Copper gears of varying sizes",
    "Two burlap sacks of extremely large crow feathers",
    "New leather boots",
    "Feet wrappings",
    "A warm fur capalet",
    "A dragon chess set",
    "Playing cards",
    "A lute inlaid with gold",
    "A penny whistle",
    "A jar containing a dying man's whisper",
    "A pot of salamander tears",
    "A baseball cap with the insignia of an unknown coat of arms",
    "Sewing repair kit",
    "Decorative bracers, inlaid with jewels",
    "A cloak that billows as if with wind, even when there is no wind to be found",
    "A spooky looking doll with many patches",
    "A saddle-repair kit",
    "A saddle for a large, unidentified animal (is it for a dragon??)",
    "A palm-sized green orb of unknown origin",
    "A four-leaf clover",
    "A walking staff",
    "A tiny silver icon of a raven",
    "A silver spoon with the letter X engraved on the handle",
    "A camp shovel",];




function getMagic() {
	const numMagic = document.getElementById('mItems').value;
	if (numMagic !== 0) {
		for (let i=0; i < numMagic; i++){
			const confirmedMagic = magicItems[Math.floor(Math.random() * magicItems.length)];
			renderMagic(confirmedMagic);
		console.log(confirmedMagic);}
		} else if (numMagic == 0){
			// Do nothing, dummy.
		} 
}
function renderMagic(item){
	const outputDivM = document.getElementById('magicOutput');
	const span_obj = document.createElement('span');
	span_obj.innerHTML = item;
	outputDivM.appendChild(span_obj);
}

function getWeapons() {
	const numWeapons = document.getElementById('weaponInput');
	if (numWeapons.value !== 0) {
		for (let i=0; i < numWeapons.value; i++){
			const confirmedWeapon = weapons[Math.floor(Math.random() * weapons.length)];
			renderWeapons(confirmedWeapon);}
		} else if (numWeapons.value == 0){
			// Do nothing, dummy.
		} 
}
function renderWeapons(item){
	const outputDivW = document.getElementById('weaponOutput');
	const span_obj = document.createElement('span');
	span_obj.innerHTML = item;
	outputDivW.appendChild(span_obj);
}

function getArmor() {
	const numArmor = document.getElementById('armorInput');
	if (numArmor.value !== 0) {
		for (let i=0; i < numArmor.value; i++){
			const confirmedArmor = armor[Math.floor(Math.random() * armor.length)];
			renderArmor(confirmedArmor);}
		} else if (numArmor.value == 0){
			// Do nothing, dummy.
		} 
}
function renderArmor(item){
	const outputDivA = document.getElementById('armorOutput');
	const span_obj = document.createElement('span');
	span_obj.innerHTML = item;
	outputDivA.appendChild(span_obj);
}



function getMisc() {
	const numMisc = document.getElementById('miscItems');
	if (numMisc.value !== 0) {
		for (let i=0; i < numMisc.value; i++){
			const confirmedMisc = miscItems[Math.floor(Math.random() * miscItems.length)];
			renderMisc(confirmedMisc);}
		} else if (numMisc.value == 0){
			// Do nothing, dummy.
		} 
}
function renderMisc(item){
	const outputDivMi = document.getElementById('miscOutput');
	const span_obj = document.createElement('span');
	span_obj.innerHTML = item;
	outputDivMi.appendChild(span_obj);
}

document.querySelector(".submitMagic").addEventListener("click", getMagic);
document.querySelector(".submitWeapons").addEventListener("click", getWeapons);

document.querySelector(".submitArmor").addEventListener("click", getArmor);
document.querySelector(".submitMisc").addEventListener("click", getMisc);

function clearMagic(){
	document.getElementById("magicOutput").innerHTML = "";
  }
  function clearWeapons(){
	document.getElementById("weaponOutput").innerHTML = "";
  }
  function clearArmor(){
	document.getElementById("armorOutput").innerHTML = "";
  }
  function clearMisc(){
	document.getElementById("miscOutput").innerHTML = "";
  }