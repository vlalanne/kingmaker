import { BuildingModel } from '../models';
const defaultBuilding = new BuildingModel();
export const BUILDINGS: BuildingModel[] = [
    {
        ...defaultBuilding,
        id: 'academy-tower',
        name: 'academy-tower',
        size: 'LARGE',
        map: 'assets/img/maps/academy-tower.png',
        icon: 'assets/img/icons/academy-tower.png',
        economy: 3,
        loyalty: 4,
        minorMagicObject: 6,
        mediumMagicObject: 4,
        price: 67,
        halvedCosts: [
            'library',
            'magic-shop'
        ]
    },
    {
        ...defaultBuilding,
        id: 'academy',
        name: 'academy',
        size: 'LARGE',
        map: 'assets/img/maps/academy.png',
        icon: 'assets/img/icons/academy.png',
        economy: 2,
        loyalty: 2,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        price: 52,
        halvedCosts: [
            'caster-tower',
            'library',
            'magic-shop'
        ],
        upgradeTo: [
            'academy-tower'
        ]
    },
    {
        ...defaultBuilding,
        id: 'alchemist',
        name: 'alchemist',
        map: 'assets/img/maps/alchemist.png',
        icon: 'assets/img/icons/alchemist.png',
        economy: 1,
        value: 1000,
        minorMagicObject: 1,
        price: 18,
        requiredHouses: 1,
        upgradeTo: [
            'caster-tower'
        ]
    },
    {
        ...defaultBuilding,
        id: 'all-seeing-eye',
        name: 'all-seeing-eye',
        map: 'assets/img/maps/all-seeing-eye.png',
        icon: 'assets/img/icons/all-seeing-eye.png',
        economy: 1,
        loyalty: 1,
        minorMagicObject: 4,
        mediumMagicObject: 3,
        majorMagicObject: 1
    },
    {
        ...defaultBuilding,
        id: 'embassy',
        name: 'embassy',
        map: 'assets/img/maps/embassy.png',
        icon: 'assets/img/icons/embassy.png',
        economy: 1,
        stability: 2,
        halvedCosts: [
            'twoAlliedBuildings'
        ],
        price: 40
    },
    {
        ...defaultBuilding,
        id: 'arena',
        name: 'arena',
        map: 'assets/img/maps/arena.png',
        icon: 'assets/img/icons/arena.png',
        size: 'LARGE',
        stability: 4,
        halvedCosts: [
            'garrison',
            'theatre',
            'festivalEdicts'
        ],
        price: 40
    },
    {
        ...defaultBuilding,
        id: 'barracks',
        name: 'barracks',
        map: 'assets/img/maps/barracks.png',
        icon: 'assets/img/icons/barracks.png',
        upgradeTo: [
            'castle',
            'garrison',
            'jail'
        ],
        defence: 2,
        unrest: -1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'black-market',
        name: 'black-market',
        map: 'assets/img/maps/black-market.png',
        icon: 'assets/img/icons/black-market.png',
        value: 2000,
        minorMagicObject: 2,
        mediumMagicObject: 1,
        majorMagicObject: 1,
        unrest: 1,
        economy: 2,
        stability: 1,
        requiredHouses: 2,
        price: 50
    },
    {
        ...defaultBuilding,
        id: 'brewery',
        name: 'brewery',
        map: 'assets/img/maps/brewery.png',
        icon: 'assets/img/icons/brewery.png',
        loyalty: 1,
        stability: 1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'brothel',
        name: 'brothel',
        map: 'assets/img/maps/brothel.png',
        icon: 'assets/img/icons/brothel.png',
        requiredHouses: 1,
        economy: 1,
        loyalty: 2,
        unrest: 1,
        upgradeTo: [
            'insatiable-flame-lust'
        ],
        price: 4
    },
    {
        ...defaultBuilding,
        id: 'caster-tower',
        name: 'caster-tower',
        map: 'assets/img/maps/caster-tower.png',
        icon: 'assets/img/icons/caster-tower.png',
        economy: 1,
        loyalty: 1,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        upgradeTo: [
            'all-seeing-eye'
        ],
        price: 30
    },
    {
        ...defaultBuilding,
        id: 'castle',
        name: 'castle',
        size: 'LARGE',
        map: 'assets/img/maps/castle.png',
        icon: 'assets/img/icons/castle.png',
        economy: 2,
        loyalty: 2,
        stability: 2,
        defence: 8,
        unrest: -4,
        halvedCosts: [
            'noble-villa',
            'town-hall'
        ],
        price: 54
    },
    {
        ...defaultBuilding,
        id: 'cathedral-abadar',
        name: 'cathedral-abadar',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-abadar.png',
        icon: 'assets/img/icons/cathedral-abadar.png',
        unrest: -4,
        loyalty: 2,
        economy: 1,
        value: 1000,
        stability: 3,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-asmodeus',
        name: 'cathedral-asmodeus',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-asmodeus.png',
        icon: 'assets/img/icons/cathedral-asmodeus.png',
        unrest: -4,
        loyalty: 2,
        stability: 3,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-calistria',
        name: 'cathedral-calistria',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-calistria.png',
        icon: 'assets/img/icons/cathedral-calistria.png',
        unrest: -4,
        loyalty: 2,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-cayden-cailean',
        name: 'cathedral-cayden-cailean',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-cayden-cailean.png',
        icon: 'assets/img/icons/cathedral-cayden-cailean.png',
        unrest: -4,
        loyalty: 2,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-desna',
        name: 'cathedral-desna',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-desna.png',
        icon: 'assets/img/icons/cathedral-desna.png',
        unrest: -4,
        loyalty: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-erastil',
        name: 'cathedral-erastil',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-erastil.png',
        icon: 'assets/img/icons/cathedral-erastil.png',
        unrest: -4,
        loyalty: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-gorum',
        name: 'cathedral-gorum',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-gorum.png',
        icon: 'assets/img/icons/cathedral-gorum.png',
        unrest: -4,
        loyalty: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-gozreh',
        name: 'cathedral-gozreh',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-gozreh.png',
        icon: 'assets/img/icons/cathedral-gozreh.png',
        unrest: -4,
        loyalty: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-iomedae',
        name: 'cathedral-iomedae',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-iomedae.png',
        icon: 'assets/img/icons/cathedral-iomedae.png',
        unrest: -4,
        loyalty: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-irori',
        name: 'cathedral-irori',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-irori.png',
        icon: 'assets/img/icons/cathedral-irori.png',
        unrest: -4,
        loyalty: 2,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-nethys',
        name: 'cathedral-nethys',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-nethys.png',
        icon: 'assets/img/icons/cathedral-nethys.png',
        unrest: -4,
        loyalty: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-pharasma',
        name: 'cathedral-pharasma',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-pharasma.png',
        icon: 'assets/img/icons/cathedral-pharasma.png',
        unrest: -4,
        loyalty: 2,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-sarenrae',
        name: 'cathedral-sarenrae',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-sarenrae.png',
        icon: 'assets/img/icons/cathedral-sarenrae.png',
        unrest: -4,
        loyalty: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-shelyn',
        name: 'cathedral-shelyn',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-shelyn.png',
        icon: 'assets/img/icons/cathedral-shelyn.png',
        unrest: -4,
        loyalty: 2,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-torag',
        name: 'cathedral-torag',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-torag.png',
        icon: 'assets/img/icons/cathedral-torag.png',
        unrest: -4,
        loyalty: 2,
        defence: 4,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'cathedral-zon-kuthon',
        name: 'cathedral-zon-kuthon',
        size: 'LARGE',
        map: 'assets/img/maps/cathedral-zon-kuthon.png',
        icon: 'assets/img/icons/cathedral-zon-kuthon.png',
        unrest: -4,
        loyalty: 3,
        defence: 2,
        minorMagicObject: 3,
        mediumMagicObject: 2,
        halvedCosts: [
            'academy',
            'temple-abadar',
            'temple-asmodeus',
            'temple-calistria',
            'temple-cayden-cailean',
            'temple-desna',
            'temple-erastil',
            'temple-gorum',
            'temple-gozreh',
            'temple-iomedae',
            'temple-irori',
            'temple-nethys',
            'temple-pharasma',
            'temple-sarenrae',
            'temple-shelyn',
            'temple-torag',
            'temple-zon-kuthon',
            'promotionEdicts'
        ],
        price: 58
    },
    {
        ...defaultBuilding,
        id: 'city-wall',
        name: 'city-wall',
        icon: 'assets/img/icons/city-wall.png',
        defence: 4,
        unrest: -2,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'dump',
        name: 'dump',
        map: 'assets/img/maps/dump.png',
        icon: 'assets/img/icons/dump.png',
        loyalty: 1,
        stability: 1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'exotic-craftsman',
        name: 'exotic-craftsman',
        map: 'assets/img/maps/exotic-craftsman.png',
        icon: 'assets/img/icons/exotic-craftsman.png',
        economy: 1,
        stability: 1,
        minorMagicObject: 1,
        price: 10,
        requiredHouses: 1
    },
    {
        ...defaultBuilding,
        id: 'gallows',
        name: 'gallows',
        map: 'assets/img/maps/gallows.png',
        icon: 'assets/img/icons/gallows.png',
        stability: 1,
        unrest: -2,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'gambling-den',
        name: 'gambling-den',
        map: 'assets/img/maps/gambling-den.png',
        icon: 'assets/img/icons/gambling-den.png',
        loyalty: -1,
        unrest: -1,
        value: 500,
        price: 12
    },
    {
        ...defaultBuilding,
        id: 'garrison',
        name: 'garrison',
        size: 'MEDIUM',
        map: 'assets/img/maps/garrison.png',
        icon: 'assets/img/icons/garrison.png',
        loyalty: 2,
        stability: 2,
        unrest: -2,
        halvedCosts: [
            'city-wall',
            'granary',
            'jail'
        ],
        upgradeTo: [
            'castle'
        ],
        price: 28
    },
    {
        ...defaultBuilding,
        id: 'granary',
        name: 'granary',
        map: 'assets/img/maps/granary.png',
        icon: 'assets/img/icons/granary.png',
        loyalty: 1,
        stability: 1,
        price: 12
    },
    {
        ...defaultBuilding,
        id: 'graveyard',
        name: 'graveyard',
        map: 'assets/img/maps/graveyard.png',
        icon: 'assets/img/icons/graveyard.png',
        loyalty: 1,
        upgradeTo: [
            'ossuary'
        ],
        price: 4
    },
    {
        ...defaultBuilding,
        id: 'guildhall',
        name: 'guildhall',
        map: 'assets/img/maps/guildhall.png',
        icon: 'assets/img/icons/guildhall.png',
        size: 'MEDIUM',
        requiredHouses: 1,
        value: 1000,
        loyalty: 2,
        economy: 2,
        halvedCosts: [
            'pier',
            'stable',
            'tradesman'
        ],
        price: 34
    },
    {
        ...defaultBuilding,
        id: 'herbalist',
        name: 'herbalist',
        map: 'assets/img/maps/herbalist.png',
        icon: 'assets/img/icons/herbalist.png',
        upgradeTo: [
            'alchemist'
        ],
        requiredHouses: 1,
        loyalty: 1,
        stability: 1,
        minorMagicObject: 1,
        price: 10
    },
    {
        ...defaultBuilding,
        id: 'house',
        name: 'house',
        map: 'assets/img/maps/house.png',
        icon: 'assets/img/icons/house.png',
        upgradeTo: [
            'mansion'
        ],
        unrest: -1,
        price: 3
    },
    {
        ...defaultBuilding,
        id: 'inn',
        name: 'inn',
        map: 'assets/img/maps/inn.png',
        icon: 'assets/img/icons/inn.png',
        price: 10,
        requiredHouses: 1,
        economy: 1,
        loyalty: 1,
        value: 500
    },
    {
        ...defaultBuilding,
        id: 'insatiable-flame-lust',
        name: 'insatiable-flame-lust',
        map: 'assets/img/maps/insatiable-flame-lust.png',
        icon: 'assets/img/icons/insatiable-flame-lust.png',
        requiredHouses: 1,
        economy: 2,
        loyalty: 3,
        unrest: 1
    },
    {
        ...defaultBuilding,
        id: 'jail',
        name: 'jail',
        map: 'assets/img/maps/jail.png',
        icon: 'assets/img/icons/jail.png',
        loyalty: 2,
        stability: 2,
        unrest: -2,
        price: 14
    },
    {
        ...defaultBuilding,
        id: 'library',
        name: 'library',
        map: 'assets/img/maps/library.png',
        icon: 'assets/img/icons/library.png',
        upgradeTo: [
            'academy'
        ],
        economy: 1,
        loyalty: 1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'lighthouse',
        name: 'lighthouse',
        map: 'assets/img/maps/lighthouse.png',
        icon: 'assets/img/icons/lighthouse.png',
        economy: 1,
        loyalty: 1,
        stability: 2,
        unrest: -1,
        price: 22
    },
    {
        ...defaultBuilding,
        id: 'lucky-pint',
        name: 'lucky-pint',
        map: 'assets/img/maps/lucky-pint.png',
        icon: 'assets/img/icons/lucky-pint.png',
        requiredHouses: 1,
        economy: 2,
        loyalty: 2,
        value: 500
    },
    {
        ...defaultBuilding,
        id: 'luxury-shop',
        name: 'luxury-shop',
        map: 'assets/img/maps/luxury-shop.png',
        icon: 'assets/img/icons/luxury-shop.png',
        upgradeTo: [
            'magic-shop'
        ],
        price: 28,
        requiredHouses: 1,
        value: 2000,
        minorMagicObject: 2,
        economy: 1
    },
    {
        ...defaultBuilding,
        id: 'magic-shop',
        name: 'magic-shop',
        map: 'assets/img/maps/magic-shop.png',
        icon: 'assets/img/icons/magic-shop.png',
        requiredHouses: 2,
        economy: 1,
        value: 2000,
        minorMagicObject: 4,
        mediumMagicObject: 2,
        majorMagicObject: 1,
        price: 68
    },
    {
        ...defaultBuilding,
        id: 'mansion',
        name: 'mansion',
        map: 'assets/img/maps/mansion.png',
        icon: 'assets/img/icons/mansion.png',
        upgradeTo: [
            'noble-villa'
        ],
        price: 10,
        stability: 1
    },
    {
        ...defaultBuilding,
        id: 'market',
        name: 'market',
        size: 'MEDIUM',
        map: 'assets/img/maps/market.png',
        icon: 'assets/img/icons/market.png',
        requiredHouses: 2,
        economy: 2,
        stability: 2,
        value: 2000,
        minorMagicObject: 2,
        halvedCosts: [
            'black-market',
            'inn',
            'shop'
        ],
        upgradeTo: [
            'black-market'
        ],
        price: 48
    },
    {
        ...defaultBuilding,
        id: 'mill',
        name: 'mill',
        map: 'assets/img/maps/mill.png',
        icon: 'assets/img/icons/mill.png',
        economy: 1,
        stability: 1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'monument',
        name: 'monument',
        map: 'assets/img/maps/monument.png',
        icon: 'assets/img/icons/monument.png',
        loyalty: 3,
        unrest: -1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'noble-villa',
        name: 'noble-villa',
        map: 'assets/img/maps/noble-villa.png',
        icon: 'assets/img/icons/noble-villa.png',
        size: 'MEDIUM',
        economy: 1,
        stability: 1,
        loyalty: 1,
        halvedCosts: [
            'exotic-craftsman',
            'luxury-shop',
            'mansion'
        ],
        price: 24
    },
    {
        ...defaultBuilding,
        id: 'ossuary',
        name: 'ossuary',
        map: 'assets/img/maps/ossuary.png',
        icon: 'assets/img/icons/ossuary.png',
        loyalty: 2,
        economy: 1
    },
    {
        ...defaultBuilding,
        id: 'park',
        name: 'park',
        map: 'assets/img/maps/park.png',
        icon: 'assets/img/icons/park.png',
        upgradeTo: [
            'theatre'
        ],
        unrest: -1,
        loyalty: 1,
        price: 4
    },
    {
        ...defaultBuilding,
        id: 'pier',
        name: 'pier',
        map: 'assets/img/maps/pier.png',
        icon: 'assets/img/icons/pier.png',
        economy: 1,
        stability: 1,
        value: 1000,
        upgradeTo: [
            'waterfront'
        ],
        price: 16
    },
    {
        ...defaultBuilding,
        id: 'rose-opera',
        name: 'rose-opera',
        map: 'assets/img/maps/rose-opera.png',
        icon: 'assets/img/icons/rose-opera.png',
        size: 'MEDIUM',
        economy: 3,
        stability: 3
    },
    {
        ...defaultBuilding,
        id: 'sawmill',
        name: 'sawmill',
        map: 'assets/img/maps/sawmill.png',
        icon: 'assets/img/icons/sawmill.png',
        economy: 1,
        stability: 1
    },
    {
        ...defaultBuilding,
        id: 'shipyard',
        name: 'shipyard',
        map: 'assets/img/maps/shipyard.png',
        icon: 'assets/img/icons/shipyard.png',
        size: 'MEDIUM',
        economy: 2,
        stability: 1,
        value: 1000,
        halvedCosts: [
            'lighthouse'
        ],
        price: 30
    },
    {
        ...defaultBuilding,
        id: 'shop',
        name: 'shop',
        map: 'assets/img/maps/shop.png',
        icon: 'assets/img/icons/shop.png',
        requiredHouses: 1,
        upgradeTo: [
            'market',
            'luxury-shop'
        ],
        economy: 1,
        value: 500,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-abadar',
        name: 'shrine-abadar',
        upgradeTo: [
            'temple-abadar'
        ],
        map: 'assets/img/maps/shrine-abadar.png',
        icon: 'assets/img/icons/shrine-abadar.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-asmodeus',
        name: 'shrine-asmodeus',
        upgradeTo: [
            'temple-asmodeus'
        ],
        map: 'assets/img/maps/shrine-asmodeus.png',
        icon: 'assets/img/icons/shrine-asmodeus.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-calistria',
        name: 'shrine-calistria',
        upgradeTo: [
            'temple-calistria'
        ],
        map: 'assets/img/maps/shrine-calistria.png',
        icon: 'assets/img/icons/shrine-calistria.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-cayden-cailean',
        name: 'shrine-cayden-cailean',
        upgradeTo: [
            'temple-cayden-cailean'
        ],
        map: 'assets/img/maps/shrine-cayden-cailean.png',
        icon: 'assets/img/icons/shrine-cayden-cailean.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-desna',
        name: 'shrine-desna',
        upgradeTo: [
            'temple-desna'
        ],
        map: 'assets/img/maps/shrine-desna.png',
        icon: 'assets/img/icons/shrine-desna.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-erastil',
        name: 'shrine-erastil',
        upgradeTo: [
            'temple-erastil'
        ],
        map: 'assets/img/maps/shrine-erastil.png',
        icon: 'assets/img/icons/shrine-erastil.png',
        unrest: -1,
        loyalty: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-gorum',
        name: 'shrine-gorum',
        upgradeTo: [
            'temple-gorum'
        ],
        map: 'assets/img/maps/shrine-gorum.png',
        icon: 'assets/img/icons/shrine-gorum.png',
        unrest: -1,
        loyalty: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-gozreh',
        name: 'shrine-gozreh',
        upgradeTo: [
            'temple-gozreh'
        ],
        map: 'assets/img/maps/shrine-gozreh.png',
        icon: 'assets/img/icons/shrine-gozreh.png',
        unrest: -1,
        loyalty: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-iomedae',
        name: 'shrine-iomedae',
        upgradeTo: [
            'temple-iomedae'
        ],
        map: 'assets/img/maps/shrine-iomedae.png',
        icon: 'assets/img/icons/shrine-iomedae.png',
        unrest: -1,
        loyalty: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-irori',
        name: 'shrine-irori',
        upgradeTo: [
            'temple-irori'
        ],
        map: 'assets/img/maps/shrine-irori.png',
        icon: 'assets/img/icons/shrine-irori.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-nethys',
        name: 'shrine-nethys',
        upgradeTo: [
            'temple-nethys'
        ],
        map: 'assets/img/maps/shrine-nethys.png',
        icon: 'assets/img/icons/shrine-nethys.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-pharasma',
        name: 'shrine-pharasma',
        upgradeTo: [
            'temple-pharasma'
        ],
        map: 'assets/img/maps/shrine-pharasma.png',
        icon: 'assets/img/icons/shrine-pharasma.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-sarenrae',
        name: 'shrine-sarenrae',
        upgradeTo: [
            'temple-sarenrae'
        ],
        map: 'assets/img/maps/shrine-sarenrae.png',
        icon: 'assets/img/icons/shrine-sarenrae.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-shelyn',
        name: 'shrine-shelyn',
        upgradeTo: [
            'temple-shelyn'
        ],
        map: 'assets/img/maps/shrine-shelyn.png',
        icon: 'assets/img/icons/shrine-shelyn.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-torag',
        name: 'shrine-torag',
        upgradeTo: [
            'temple-torag'
        ],
        map: 'assets/img/maps/shrine-torag.png',
        icon: 'assets/img/icons/shrine-torag.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'shrine-zon-kuthon',
        name: 'shrine-zon-kuthon',
        upgradeTo: [
            'temple-zon-kuthon'
        ],
        map: 'assets/img/maps/shrine-zon-kuthon.png',
        icon: 'assets/img/icons/shrine-zon-kuthon.png',
        unrest: -1,
        loyalty: 1,
        minorMagicObject: 1,
        price: 8
    },
    {
        ...defaultBuilding,
        id: 'smith',
        name: 'smith',
        map: 'assets/img/maps/smith.png',
        icon: 'assets/img/icons/smith.png',
        economy: 1,
        stability: 1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'stable',
        name: 'stable',
        map: 'assets/img/maps/stable.png',
        icon: 'assets/img/icons/stable.png',
        requiredHouses: 1,
        economy: 1,
        loyalty: 1,
        value: 500,
        price: 10
    },
    {
        ...defaultBuilding,
        id: 'tannery',
        name: 'tannery',
        map: 'assets/img/maps/tannery.png',
        icon: 'assets/img/icons/tannery.png',
        requiredHouses: 1,
        economy: 1,
        stability: 1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'tavern',
        name: 'tavern',
        map: 'assets/img/maps/tavern.png',
        icon: 'assets/img/icons/tavern.png',
        requiredHouses: 1,
        upgradeTo: [
            'lucky-pint'
        ],
        economy: 1,
        loyalty: 1,
        value: 500,
        price: 12
    },
    {
        ...defaultBuilding,
        id: 'temple-abadar',
        name: 'temple-abadar',
        upgradeTo: [
            'cathedral-abadar'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-abadar.png',
        icon: 'assets/img/icons/temple-abadar.png',
        unrest: -2,
        economy: 3,
        minorMagicObject: 3,
        halvedCosts: [
            'graveyard',
            'monument',
            'shop'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-asmodeus',
        name: 'temple-asmodeus',
        upgradeTo: [
            'cathedral-asmodeus'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-asmodeus.png',
        icon: 'assets/img/icons/temple-asmodeus.png',
        loyalty: 2,
        stability: 2,
        minorMagicObject: 2,
        halvedCosts: [
            'graveyard',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-calistria',
        name: 'temple-calistria',
        upgradeTo: [
            'cathedral-calistria'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-calistria.png',
        icon: 'assets/img/icons/temple-calistria.png',
        loyalty: 1,
        stability: 3,
        minorMagicObject: 2,
        halvedCosts: [
            'brothel',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-cayden-cailean',
        name: 'temple-cayden-cailean',
        upgradeTo: [
            'cathedral-cayden-cailean'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-cayden-cailean.png',
        icon: 'assets/img/icons/temple-cayden-cailean.png',
        economy: 2,
        loyalty: 3,
        stability: -1,
        minorMagicObject: 2,
        halvedCosts: [
            'graveyard',
            'brewery',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-desna',
        name: 'temple-desna',
        upgradeTo: [
            'cathedral-desna'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-desna.png',
        icon: 'assets/img/icons/temple-desna.png',
        loyalty: 3,
        stability: 1,
        minorMagicObject: 2,
        halvedCosts: [
            'park',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-erastil',
        name: 'temple-erastil',
        upgradeTo: [
            'cathedral-erastil'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-erastil.png',
        icon: 'assets/img/icons/temple-erastil.png',
        unrest: -2,
        loyalty: 2,
        stability: 2,
        minorMagicObject: 2,
        halvedCosts: [
            'park',
            'mill',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-gorum',
        name: 'temple-gorum',
        upgradeTo: [
            'cathedral-gorum'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-gorum.png',
        icon: 'assets/img/icons/temple-gorum.png',
        unrest: -2,
        loyalty: 3,
        stability: 1,
        minorMagicObject: 2,
        halvedCosts: [
            'graveyard',
            'smith',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-gozreh',
        name: 'temple-gozreh',
        upgradeTo: [
            'cathedral-gozreh'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-gozreh.png',
        icon: 'assets/img/icons/temple-gozreh.png',
        unrest: -2,
        loyalty: 2,
        stability: 2,
        minorMagicObject: 2,
        halvedCosts: [
            'park',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-iomedae',
        name: 'temple-iomedae',
        upgradeTo: [
            'cathedral-iomedae'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-iomedae.png',
        icon: 'assets/img/icons/temple-iomedae.png',
        unrest: -2,
        loyalty: 3,
        stability: 1,
        minorMagicObject: 2,
        halvedCosts: [
            'graveyard',
            'watchtower',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-irori',
        name: 'temple-irori',
        upgradeTo: [
            'cathedral-irori'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-irori.png',
        icon: 'assets/img/icons/temple-irori.png',
        unrest: -2,
        loyalty: 1,
        stability: 3,
        minorMagicObject: 2,
        halvedCosts: [
            'park',
            'library',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-nethys',
        name: 'temple-nethys',
        upgradeTo: [
            'cathedral-nethys'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-nethys.png',
        icon: 'assets/img/icons/temple-nethys.png',
        unrest: -2,
        loyalty: 1,
        stability: 1,
        economy: 1,
        minorMagicObject: 3,
        halvedCosts: [
            'graveyard',
            'library',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-pharasma',
        name: 'temple-pharasma',
        upgradeTo: [
            'cathedral-pharasma'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-pharasma.png',
        icon: 'assets/img/icons/temple-pharasma.png',
        unrest: -2,
        loyalty: 1,
        stability: 3,
        minorMagicObject: 2,
        halvedCosts: [
            'graveyard',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-sarenrae',
        name: 'temple-sarenrae',
        upgradeTo: [
            'cathedral-sarenrae'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-sarenrae.png',
        icon: 'assets/img/icons/temple-sarenrae.png',
        unrest: -2,
        loyalty: 2,
        stability: 2,
        minorMagicObject: 2,
        halvedCosts: [
            'park',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-shelyn',
        name: 'temple-shelyn',
        upgradeTo: [
            'cathedral-shelyn'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-shelyn.png',
        icon: 'assets/img/icons/temple-shelyn.png',
        unrest: -2,
        economy: 1,
        stability: 3,
        minorMagicObject: 2,
        halvedCosts: [
            'park',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-torag',
        name: 'temple-torag',
        upgradeTo: [
            'cathedral-torag'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-torag.png',
        icon: 'assets/img/icons/temple-torag.png',
        unrest: -2,
        loyalty: 1,
        stability: 3,
        minorMagicObject: 2,
        halvedCosts: [
            'graveyard',
            'smith',
            'city-wall'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'temple-zon-kuthon',
        name: 'temple-zon-kuthon',
        upgradeTo: [
            'cathedral-zon-kuthon'
        ],
        size: 'MEDIUM',
        map: 'assets/img/maps/temple-zon-kuthon.png',
        icon: 'assets/img/icons/temple-zon-kuthon.png',
        unrest: -2,
        loyalty: 3,
        stability: 1,
        minorMagicObject: 2,
        halvedCosts: [
            'graveyard',
            'monument',
            'shrine-abadar',
            'shrine-asmodeus',
            'shrine-calistria',
            'shrine-cayden-cailean',
            'shrine-desna',
            'shrine-erastil',
            'shrine-gorum',
            'shrine-gozreh',
            'shrine-iomedae',
            'shrine-irori',
            'shrine-nethys',
            'shrine-pharasma',
            'shrine-sarenrae',
            'shrine-shelyn',
            'shrine-torag',
            'shrine-zon-kuthon'
        ],
        price: 32
    },
    {
        ...defaultBuilding,
        id: 'tenement',
        name: 'tenement',
        map: 'assets/img/maps/tenement.png',
        icon: 'assets/img/icons/tenement.png',
        upgradeTo: [
            'house'
        ],
        price: 1,
        unrest: 2
    },
    {
        ...defaultBuilding,
        id: 'theatre',
        name: 'theatre',
        map: 'assets/img/maps/theatre.png',
        icon: 'assets/img/icons/theatre.png',
        size: 'MEDIUM',
        price: 14,
        economy: 2,
        halvedCosts: [
            'brothel',
            'park',
            'tavern'
        ],
        upgradeTo: [
            'arena',
            'rose-opera'
        ],
        stability: 2
    },
    {
        ...defaultBuilding,
        id: 'thieves-guild',
        name: 'thieves-guild',
        map: 'assets/img/maps/thieves-guild.png',
        icon: 'assets/img/icons/thieves-guild.png',
        price: 32,
        value: 1000,
        halvedCosts: [
            'gallows',
            'gambling-den'
        ],
        economy: 1,
        stability: 1,
        defence: 1,
        unrest: 1
    },
    {
        ...defaultBuilding,
        id: 'tourney-grounds',
        name: 'tourney-grounds',
        size: 'LARGE',
        map: 'assets/img/maps/tourney-grounds.png',
        icon: 'assets/img/icons/tourney-grounds.png',
        economy: 3,
        loyalty: 1,
        upgradeTo: [
            'arena'
        ],
        price: 25
    },
    {
        ...defaultBuilding,
        id: 'town-hall',
        name: 'town-hall',
        size: 'MEDIUM',
        map: 'assets/img/maps/town-hall.png',
        icon: 'assets/img/icons/town-hall.png',
        economy: 1,
        loyalty: 1,
        stability: 1,
        halvedCosts: [
            'barracks',
            'dump',
            'watchtower'
        ],
        price: 22
    },
    {
        ...defaultBuilding,
        id: 'tradesman',
        name: 'tradesman',
        map: 'assets/img/maps/tradesman.png',
        icon: 'assets/img/icons/tradesman.png',
        upgradeTo: [
            'exotic-craftsman',
            'guildhall'
        ],
        economy: 1,
        requiredHouses: 1,
        value: 500,
        stability: 1,
        price: 10
    },
    {
        ...defaultBuilding,
        id: 'watchtower',
        name: 'watchtower',
        map: 'assets/img/maps/watchtower.png',
        icon: 'assets/img/icons/watchtower.png',
        upgradeTo: [
            'castle'
        ],


        price: 12,
        stability: 1,
        defence: 2
    },
    {
        ...defaultBuilding,
        id: 'waterfront',
        name: 'waterfront',
        map: 'assets/img/maps/waterfront.png',
        icon: 'assets/img/icons/waterfront.png',
        size: 'LARGE',
        price: 90,
        economy: 4,
        value: 4000,
        halvedCosts: [
            'guildhall',
            'market',
            'taxEdicts'
        ],
        minorMagicObject: 3,
        mediumMagicObject: 2,
        majorMagicObject: 1
    },
    {
        ...defaultBuilding,
        id: 'weaver',
        name: 'weaver',
        map: 'assets/img/maps/weaver.png',
        icon: 'assets/img/icons/weaver.png',
        economy: 1,
        stability: 1,
        price: 6
    },
    {
        ...defaultBuilding,
        id: 'winemaker',
        name: 'winemaker',
        map: 'assets/img/maps/winemaker.png',
        icon: 'assets/img/icons/winemaker.png',
        economy: 1,
        loyalty: 1,
        stability: 1,
        price: 10
    }
];
