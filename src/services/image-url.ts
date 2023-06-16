function getCropUrl(url:string){
    // 'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg'
    // 'https://media.rawg.io/media/crop/600/400'
    // 'games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg'


let part1number = url.indexOf('media/') + 'media/'.length
let part1 = url.slice(0,part1number) + 'crop/600/400/'
let part2 = url.slice(28)
return part1 + part2
// console.log(cropImg)
}

// getCropUrl('https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg')


export default getCropUrl