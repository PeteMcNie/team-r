import { twoTeams } from './actions'

export function sortSelectedPeople (selectedPeople) {
  // console.log('Sort Selected people in sortFunction: ', selectedPeople)
  let currentIndex = selectedPeople.length
  let tempValue
  let randomIndex

  // eslint-disable-next-line no-console
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = selectedPeople[currentIndex]
    selectedPeople[currentIndex] = selectedPeople[randomIndex]
    selectedPeople[randomIndex] = tempValue
  }
  return sortIntoGroups(selectedPeople)
}

export function sortIntoGroups (shuffledPeople) {
  // IF STATEMENT TO GO IN HERE IF DIVIDING INTO MORE THAN TWO TEAMS
  const halfOfArray = Math.floor(shuffledPeople.length / 2)
  const teamOne = shuffledPeople.slice(0, halfOfArray)
  const teamTwo = shuffledPeople.slice(halfOfArray, shuffledPeople.length)
  // console.log('teamOne: ', teamOne)
  // console.log('teamTwo: ', teamTwo)
  const teams = { teamOne, teamTwo }
  // console.log('teams: ', teams)
  return twoTeams(teams)
}
