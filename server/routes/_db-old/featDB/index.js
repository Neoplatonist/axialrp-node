
const featsDB = [
  {
    name: 'Grappler',
    description: 'You’ve developed the skills necessary to hold your own in close-quarters grappling.',
    prerequisite: {
      ability: 'Strength',
      ability_score: 13
    },
    benefits: [
      'You have advantage on attack rolls against a creature you are grappling.',
      'You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.'
    ]
  }
]

module.exports = { featsDB }