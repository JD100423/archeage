export const SET_ITEM_PRICE = 'SET_ITEM_PRICE';

export const CURRENCY = Object.freeze({
  COIN: 'Coins',
  GILDA: 'Gilda Stars',
  HONOR: 'Honor Points',
  VOCATION: 'Vocation Badges',
  PRESTIGE: 'Prestige',
  LEADERSHIP: 'Leadership',
  GUILD_XP: 'Guild XP',
  FAMILY_XP: 'Family XP',
  BLUE_SALT_BOND: 'Blue Salt Bond',
  ITEM: 'Items',
  CREDIT: 'Credits',
  DILIGENCE: 'Diligence Coins',
  LOYALTY: 'Loyalty Tokens',
  MANASTORM: 'Manastorm Crystals',
  KYRIOS: 'Kyrios Badge',
});

export const GRADE_NAME = Object.freeze({
  POOR: 'Poor',
  BASIC: 'Basic',
  GRAND: 'Grand',
  RARE: 'Rare',
  ARCANE: 'Arcane',
  HEROIC: 'Heroic',
  UNIQUE: 'Unique',
  CELESTIAL: 'Celestial',
  DIVINE: 'Divine',
  EPIC: 'Epic',
  LEGENDARY: 'Legendary',
  MYTHIC: 'Mythic',
  ETERNAL: 'Eternal',
});

export const GRADE = Object.freeze({
  POOR: 0,
  BASIC: 1,
  GRAND: 2,
  RARE: 3,
  ARCANE: 4,
  HEROIC: 5,
  UNIQUE: 6,
  CELESTIAL: 7,
  DIVINE: 8,
  EPIC: 9,
  LEGENDARY: 10,
  MYTHIC: 11,
  ETERNAL: 12,
});

export const ITEM = Object.freeze({
  GILDA_STAR: 23633,
  KYRIOS_BADGE: 37509,
  SHATIGONS_SAND: 35898,
  HONORABLE_VICTORY_14: 43779,
  HONORABLE_VICTORY_5: 32492,
  HONORABLE_VICTORY_4: 32491,
  HONORABLE_VOCATION_4: 42852,
  BOUND_LABOR_RECHARGER: 46250,
  IMPROVED_INFUSION_SUPPLY_KIT: 47218,
  BLUE_SALT_BOND: 41488,
  RAINBOW_SPRINKLER: 35721,
  SHARPWIND_MINING_DRILL: 35303,
  STAR_WINGS: 685,
  ACID_GOBBET: 43129,
  CURSED_ARMOR_SCRAP: 43128,
  UNIDENTIFIED_HIRAM_INFUSION: 45731,
  MYSTERIOUS_HIRAM_INFUSION: 46023,
  RADIANT_HIRAM_INFUSION: 47052,
  HIRAM_AWAKENING_SCROLL: 45729,
  RADIANT_HIRAM_AWAKENING_SCROLL: 45908,
  BRILLIANT_HIRAM_AWAKENING_SCROLL: 47064,
  RED_DRAGON_POUCH: 46569,
  KADUMS_CRATE: 47702,
  ONYX_ARCHEUM_ESSENCE: 32103,
  DRAGON_ESSENCE_STABILIZER: 32106,
  REVENANT_SOULSTONE: 38093,
  ORIGINAL_TITANS_WINGS: 44018,
  FIERCE_TITANS_WINGS: 44460,
  GLOWING_PRISM: 15621,
  CONDENSED_SCENT: 26505,
  VITA_ROOT: 21850,
  WATER: 15694,
  ECO_FRIENDLY_FUEL: 26548,
  AXLE_GREASE: 42314,
  CAPTAINS_PROTECTION: 43084,
  RECOVERY_POUCH_KIT: 19034,
  CHOPPED_PRODUCE: 30898,
  DRIED_FLOWERS: 30900,
  GROUND_GRAIN: 30902,
  GROUND_SPICES: 30901,
  HONEY: 28481,
  CARROT: 7998,
  STARLIGHT_ARCHEUM_DUST: 16349,
  MYSTERIOUS_ABYSSAL_ENHANCER: 46576,
  TAX_CERTIFICATE: 31891,
  NORYETTE_EARRING: 46593,
  NORYETTE_RING: 46590,
  NORYETTE_AWAKENING_SCROLL: 46647,
  LUMINOUS_NORYETTE_AWAKENING_SCROLL: 46648,
  MISTSONG_GRINDING_GUARDIAN_SCROLL: 39803,
  EXPLORERS_BOW: 47790,
  EXPLORERS_1H_WEAPON_CRATE: 47868,
  EXPLORERS_2H_WEAPON_CRATE: 47869,
  EXPLORERS_CLOTH_CRATE: 47870,
  EXPLORERS_LEATHER_CRATE: 47872,
  EXPLORERS_PLATE_CRATE: 47873,
  EXPLORERS_CLOTH_COMPONENT_CRATE: 47871,
  EXPLORERS_LEATHER_COMPONENT_CRATE: 47874,
  EXPLORERS_PLATE_COMPONENT_CRATE: 47875,
  STORY_QUEST_INFUSION_RANK_1: 48507,
  STORY_QUEST_INFUSION_RANK_2: 48508,
  STORY_QUEST_INFUSION_RANK_3: 48509,
  STORY_AWAKENING_SCROLL_RANK_1: 47866,
  STORY_AWAKENING_SCROLL_RANK_2: 47867,
  STORY_AWAKENING_SCROLL_RANK_3: 47952,
  ADVENTURERS_EVENSTONE: 48076,
  BLUE_SALT_KNIFE: 8326,
  BLUE_SALT_HAMMER: 8329,
  REDTALON_HELM: 28082,
  REDTALON_ARMOR: 28083,
  REDTALON_SADDLE: 28080,
  REDTALON_LEGGUARDS: 28081,
  LABYRINTH_VALUABLES_CHEST: 28334,
  CARMILAS_MEMORY: 27137,
  SUNSET_PORTALSTONE: 39780,
  SUPERIOR_DOOMSHADOW_NODACHI: 39723,
  SUNPOINT: 28301,
  MOONPOINT: 28302,
  STARPOINT: 31929,
  SUNGLOW_LUNAGEM: 43481,
  DERANGED_SPIRIT: 28982,
  MYSTERIOUS_GEM: 44829,
  ABYSSAL_SHARD: 28189,
  ABYSSAL_CRYSTAL: 28188,
  ETERNAL_WINTER_CHILL: 24916,
  HEAT_OF_ETERNAL_SUMMER: 24915,
  PRIME_LUNARITE: 24914,
  BLACK_PEARL: 19045,
  AMETHYST: 8079,
  DIAMOND: 8076,
  EMERALD: 8082,
  TOPAZ: 8084,
  SMALL_BREATH_OF_LIFE: 46825,
  BLANK_REGRADE_SCROLL: 28305,
  BEAUTIFULLY_COLORED_FABRIC: 16344,
  STURDY_INGOT: 8319,
  FINE_LEATHER: 16328,
  PRISMATIC_DIAMOND: 31810,
  HONORFORGED_MEDAL: 40491,
  PUREBRED_BEAR_CERTIFICATE: 29767,
  DILIGENCE_COIN: 48064,
  MANASTORM_CRYSTAL: 45508,
  CHILLED_SEAFOAM: 29216,
  TERRITORY_COIN: 48078,
  BLAZING_WIND_SPIRIT_LEATHER: 28970,
  BLAZING_CLOUDSPUN_FABRIC: 28971,
  BLAZING_NURI_FOREST_LUMBER: 29238,
  BLAZING_SUNRIDGE_INGOT: 28969,
  TERRITORY_PENCE: 40229,
  TERRITORY_RESOURCE_COIN: 48133,
  LOYALTY_TOKEN: 39314,
  LOGIN_BADGE: 8000641,
  MINERS_FARMHOUSE: 37144,
});

export const STAT_MULTIPLIERS = Object.freeze({
  DPS: [0.8, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.35, 1.5, 1.7, 1.9, 2, 2.1],
  ARMOR: [0.8, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.35, 1.5, 1.7, 1.9, 2, 2.1],
  DURABILITY: [0.5, 1., 1.05, 1.095, 1.135, 1.17, 1.2, 1.225, 1.245, 1.26, 1.27, 1.275, 1.2795],
  OTHER: [.8, 1, 1.08, 1.16, 1.24, 1.32, 1.4, 1.5, 1.6, 1.7, 1.85, 2, 2.1],
});
