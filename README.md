![cv](https://github.com/BartoszJarocki/cv/assets/1017620/79bdb9fc-0b20-4d2c-aafe-0526ad4a71d2)

<h1>minimalist cv <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBartoszJarocki%2Fcv"><img src="https://vercel.com/button" alt="Deploy with Vercel" height="24" align="right"></a></h1>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

simple web app that renders a minimalist CV with print-friendly layout.

## getting started

```bash
git clone https://github.com/BartoszJarocki/cv.git
cd cv
pnpm install
pnpm dev
# open http://localhost:3000
# edit src/data/resume-data.ts to customize
```

## scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production
pnpm start        # start production server
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run both linting and formatting checks
pnpm check:fix    # run both linting and formatting with auto-fix
```

## project structure

```
src/
├── app/                # next.js app router
│   ├── components/     # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── layout.tsx      # root layout with metadata
│   └── page.tsx        # main resume page
├── components/         # shared components
│   ├── icons/          # social icon components
│   └── ui/             # shadcn/ui components
├── data/               # resume data configuration
│   └── resume-data.ts
└── lib/                # utilities and types
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## customization

all resume content lives in a single file:

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

styling uses tailwind css — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

## docker

```bash
docker compose build     # build the container
docker compose up -d     # run the container
docker compose down      # stop the container
```

## license

MIT


## 🌐 Web Resources & Interactive Index
- [TAP IT AWAY 3D](https://themindzone.pages.dev/tap-it-away-3d.html)
- [KNOCK AND RUN 100 DOORS ESCAPE](https://learnquesters.pages.dev/knock-and-run-100-doors-escape.html)
- [STICKMAN FOOTBALL](https://iskillquest.pages.dev/stickman-football.html)
- [CATEGORY IDLE445](https://thelearnquesters.pages.dev/category-idle445.html)
- [LITTLE BUGS](https://learnquester.pages.dev/little-bugs.html)
- [CATEGORY WAR](https://themindzone.pages.dev/category-war.html)
- [100 DOORS CHALLENGE](https://theskillquest.pages.dev/100-doors-challenge.html)
- [ARMY TRUCK DRIVER ONLINE](https://thequizzone.pages.dev/army-truck-driver-online.html)
- [CODE RUNNER BINARY CONFUSION](https://thequizzone.pages.dev/code-runner-binary-confusion.html)
- [CATEGORY AVOID295](https://learnquesters.pages.dev/category-avoid295.html)
- [ROBOT TRANSFORM RACE](https://iskillquest.pages.dev/robot-transform-race.html)
- [CATEGORY UNBLOCKED WEBSITES](https://themindplay.pages.dev/category-unblocked-websites.html)
- [CATEGORY SHOP49](https://themindskillplayplay.pages.dev/category-shop49.html)
- [SLENDER BOY ESCAPE ROBBIE](https://themindplaying.web.app/slender-boy-escape-robbie.html)
- [KITTY SQUAD WINTER DRESS UP](https://thelearnquesters.pages.dev/kitty-squad-winter-dress-up.html)
- [FLOWER SHOP](https://learnquester.pages.dev/flower-shop.html)
- [CATEGORY DESTROY256](https://skillplay.github.io/category-destroy256.html)
- [MINE 2D SURVIVAL HEROBRINE](https://themindplay.pages.dev/mine-2d-survival-herobrine.html)
- [SORT GAME TOY SORT](https://thelearnquesters.pages.dev/sort-game-toy-sort.html)
- [CATEGORY PUZZLE 4](https://thelearnquesters.pages.dev/category-puzzle-4.html)
- [CAPYBARA XMAS MERGE](https://thelearnquesters.pages.dev/capybara-xmas-merge.html)
- [COE SNAKE](https://thelearnquesters.pages.dev/coe-snake.html)
- [MAHJONG SLIDE PUZZLE](https://learnquester.pages.dev/mahjong-slide-puzzle.html)
- [ARENA](https://theskillquest.pages.dev/arena.html)
- [DREAMY HOME](https://themindplay.pages.dev/dreamy-home.html)
- [SPRUNKI TORCHES MAZE](https://themindplay.pages.dev/sprunki-torches-maze.html)
- [PENGUIN ADVENTURE](https://thelearnquesters.pages.dev/penguin-adventure.html)
- [TURBO RACE](https://themindplay.pages.dev/turbo-race.html)
- [WIPE INSIGHT MASTER](https://themindplaying.web.app/wipe-insight-master.html)
- [HOME PIN 1](https://learnquesters.pages.dev/home-pin-1.html)
- [GT CHAMPIONSHIP ARCADE](https://themindzone.pages.dev/gt-championship-arcade.html)
- [UNBLOCK IT 3D](https://themindplays.pages.dev/unblock-it-3d.html)
- [CATEGORY POOL17](https://thelearnquesters.pages.dev/category-pool17.html)
- [YOUR DREAM ROOM](https://themindplays.pages.dev/your-dream-room.html)
- [NINJA OBBY PARKOUR](https://themindplays.pages.dev/ninja-obby-parkour.html)
- [SWEET MATCH](https://thelearnquesters.pages.dev/sweet-match.html)
- [PICTURE BY PIECES](https://learnquester.pages.dev/picture-by-pieces.html)
- [COUNTRYSIDE DRIVING QUEST](https://themindplays.pages.dev/countryside-driving-quest.html)
- [RUMMY 500 CARD GAME](https://thelearnquesters.pages.dev/rummy-500-card-game.html)
- [MADNESS DRIVER VERTIGO CITY](https://themindplay.pages.dev/madness-driver-vertigo-city.html)
- [BULLET SUPERHERO](https://thelearnquesters.pages.dev/bullet-superhero.html)
- [HALLOWEEN STICKMAN 2](https://thelearnquesters.pages.dev/halloween-stickman-2.html)
- [CATEGORY RACING DRIVING 3](https://themindplay.pages.dev/category-racing-driving-3.html)
- [CITY BIKE RACING CHAMPION](https://themindplay.pages.dev/city-bike-racing-champion.html)
- [MERGE MASTER SKIBIDI BOP](https://thequizzone.pages.dev/merge-master-skibidi-bop.html)
- [CATEGORY PUZZLE 7](https://thelearnquesters.pages.dev/category-puzzle-7.html)
- [KUZBASS HORROR](https://thelearnquesters.pages.dev/kuzbass-horror.html)
- [UNSTACK TOWER](https://thequizzone.pages.dev/unstack-tower.html)
- [GOLD MINER TOWER DEFENSE](https://thelearnquesters.pages.dev/gold-miner-tower-defense.html)
- [MERGE BEASTS](https://thequizzone.pages.dev/merge-beasts.html)
- [CATEGORY GROW99](https://thelearnquesters.pages.dev/category-grow99.html)
- [HOMO EVOLUTION](https://learnquester.pages.dev/homo-evolution.html)
- [STRANGE PACKAGES](https://themindplays.pages.dev/strange-packages.html)
- [CATEGORY PREMIUM PERKS71](https://themindplay.pages.dev/category-premium-perks71.html)
- [CATEGORY PUZZLE](https://learnquesters.pages.dev/category-puzzle.html)
- [GOODS SORTING SHOPPING MASTER](https://thequizzone.pages.dev/goods-sorting-shopping-master.html)
- [ONE HERO](https://thequizzone.pages.dev/one-hero.html)
- [CATEGORY QUIZ40](https://studyplayings.pages.dev/category-quiz40.html)
- [FLICK BASEBALL SUPER HOMERUN](https://studyplaying.github.io/flick-baseball-super-homerun.html)
- [SQUAREHEAD HERO](https://studyplaying.github.io/squarehead-hero.html)
- [SAFARI STORY MAHJONG](https://themindplays.pages.dev/safari-story-mahjong.html)
- [BLOCK MINE FUSE TNT](https://learnquester.pages.dev/block-mine-fuse-tnt.html)
- [TILE LIVING](https://themindzone.pages.dev/tile-living.html)
- [CATEGORY CUTE](https://learnquesters.pages.dev/category-cute.html)
- [MERGE MASTER SKIBIDI BOP](https://studyplaying.github.io/merge-master-skibidi-bop.html)
- [HERO FIGHT CLASH](https://themindplay.pages.dev/hero-fight-clash.html)
- [COMBINE PICKAXES](https://themindplays.pages.dev/combine-pickaxes.html)
- [PICTURE PUZZLES](https://themindplay.pages.dev/picture-puzzles.html)
- [OBBY DRAW TO ESCAPE](https://themindplay.pages.dev/obby-draw-to-escape.html)
- [NORTHERN LIGHTS THE SECRET OF THE FOREST](https://iskillquest.pages.dev/northern-lights-the-secret-of-the-forest.html)
- [CATEGORY CONNECT68](https://thequizzone.pages.dev/category-connect68.html)
- [HAPPY FRUIT LINK](https://theskillquest.pages.dev/happy-fruit-link.html)
- [FLY AND SHOOT 1 ITALIAN BOSSES](https://iskillquest.pages.dev/fly-and-shoot-1-italian-bosses.html)
- [ASSOCIATIONS](https://thequizzone.pages.dev/associations.html)
- [MEGA PRIZE SCRATCH](https://themindplays.pages.dev/mega-prize-scratch.html)
- [FOOT CHINKO RUSSIA 2018](https://studyplaying.github.io/foot-chinko-russia-2018.html)
- [MERGE 2048 CAKE](https://studyplaying.github.io/merge-2048-cake.html)
- [CATEGORY MERGE](https://thelearnquesters.pages.dev/category-merge.html)
- [CRAZY PLANE LANDING](https://themindplay.pages.dev/crazy-plane-landing.html)
- [RAGDOLL SHOW THROW BREAK AND DESTROY](https://studyplayings.web.app/ragdoll-show-throw-break-and-destroy.html)
- [ELLIES RECIPE DUBAI CHOCOLATE BAR](https://iskillquest.pages.dev/ellies-recipe-dubai-chocolate-bar.html)
- [KING OF CRABS](https://learnquester.pages.dev/king-of-crabs.html)
- [PUNCHERS](https://themindplay.pages.dev/punchers.html)
- [CRYPTOWORD](https://learnquester.pages.dev/cryptoword.html)
- [BALL MANIA](https://themindplay.pages.dev/ball-mania.html)
- [MERGE ARCHER DEFENSE](https://learnquester.pages.dev/merge-archer-defense.html)
- [CATEGORY BATTLE](https://studyplayings.web.app/category-battle.html)
- [GLOSSY BUBBLES CHALLENGE](https://studyplayings.web.app/glossy-bubbles-challenge.html)
- [CATEGORY CASUAL969](https://studyplayings.web.app/category-casual969.html)
- [MAHJONG CONNECT SPOOKY](https://studyplayings.web.app/mahjong-connect-spooky.html)
- [IDLE LANDMARK BUILDER](https://studyplaying.github.io/idle-landmark-builder.html)
- [CELEBRITY WEDNESDAY ADDAMS STYLE](https://learnquester.pages.dev/celebrity-wednesday-addams-style.html)
- [AXE THROW](https://studyplaying.github.io/axe-throw.html)
- [MERGE BEASTS](https://themindplays.pages.dev/merge-beasts.html)
- [TRIANGLES](https://thequizzone.pages.dev/triangles.html)
- [FASHION BATTLE FOR SURVIVAL](https://themindplay.pages.dev/fashion-battle-for-survival.html)
- [GOODS TRIPLE MATCH 3D](https://themindplays.pages.dev/goods-triple-match-3d.html)
- [MONSTER SLAYER MERGE SURVIVE](https://themindplaying.web.app/monster-slayer-merge-survive.html)
- [DONUT RUN](https://themindzone.pages.dev/donut-run.html)
- [STYLISH NAIL ART](https://themindplay.pages.dev/stylish-nail-art.html)
- [SUPERHERO DROP AND SAVE](https://themindzone.pages.dev/superhero-drop-and-save.html)
- [ZOMBIE EEASTER BUNNIES](https://studyplayings.web.app/zombie-eeaster-bunnies.html)
- [CATEGORY EDUCATIONAL](https://learnquesters.pages.dev/category-educational.html)
- [FLICK BASEBALL SUPER HOMERUN](https://learnquester.pages.dev/flick-baseball-super-homerun.html)
- [REVOXEL 3D VOXEL RPG SHOOTER](https://studyplayings.pages.dev/revoxel-3d-voxel-rpg-shooter.html)
- [CLEAN HOUSE CLEARING TRASH AND DIRT](https://themindplays.pages.dev/clean-house-clearing-trash-and-dirt.html)
- [CATEGORY TOWER DEFENSE118](https://themindplaying.web.app/category-tower-defense118.html)
- [INDEX8](https://thequizzone.pages.dev/index8.html)
- [CATEGORY PUZZLE 11](https://themindplay.pages.dev/category-puzzle-11.html)
- [CATEGORY FASHION](https://learnquester.github.io/category-fashion.html)
- [TRUCKTOPOLIS COOKING CHAOS](https://theskillquest.pages.dev/trucktopolis-cooking-chaos.html)
- [SPRUNKI POPIT](https://studyplayings.web.app/sprunki-popit.html)
- [GARDEN BLOCK PUZZLE](https://themindplaying.web.app/garden-block-puzzle.html)
- [SNOW RACE 3D FUN RACING](https://studyplayings.web.app/snow-race-3d-fun-racing.html)
- [ANGRY FLAPPY](https://iskillquest.pages.dev/angry-flappy.html)
- [AVENGER GUARD](https://themindplay.github.io/avenger-guard.html)
- [BOMB HEAD HOT POTATO](https://learnquesters.pages.dev/bomb-head-hot-potato.html)
- [SCRAP CAR MERGE](https://learnquester.pages.dev/scrap-car-merge.html)
- [TOBININ](https://thequizzone.pages.dev/tobinin.html)
- [PHYSICS BOX 2](https://themindplay.github.io/physics-box-2.html)
- [SQUAD ASSEMBLER](https://themindplay.pages.dev/squad-assembler.html)
- [BLOON POP](https://learnquester.github.io/bloon-pop.html)
- [BILLIARDS 3D RUSSIAN PYRAMID](https://thequizzone.pages.dev/billiards-3d-russian-pyramid.html)
- [RAGDOLL SHOW THROW BREAK AND DESTROY](https://themindplays.pages.dev/ragdoll-show-throw-break-and-destroy.html)
- [CATEGORY PHYSICS371](https://thelearnquesters.pages.dev/category-physics371.html)
- [CAPYBARA SKEWER MATCH](https://thelearnquesters.pages.dev/capybara-skewer-match.html)
- [TANK STARS](https://iskillquest.pages.dev/tank-stars.html)
- [BASKETBALL RUSH](https://studyplaying.github.io/basketball-rush.html)
- [CATEGORY MATCH THREE](https://themindplays.pages.dev/category-match-three.html)
- [HYPER NURSE HOSPITAL GAMES](https://studyquests.pages.dev/hyper-nurse-hospital-games.html)
