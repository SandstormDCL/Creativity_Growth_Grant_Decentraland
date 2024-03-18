export * from '@dcl/sdk'
import * as utils from '@dcl-sdk/utils'
import { Vector3 } from '@dcl/sdk/math'

export function AmbientSound () {
    utils.playSound('sounds/ambient.mp3', true, Vector3.create(44, 4, 44))
}
export function Pageflip () {
    utils.playSound('sounds/pageflip.mp3')
}
export function CoinCollect () {
    utils.playSound('sounds/coincollect.mp3')
}
export function Click () {
    utils.playSound('sounds/click.mp3')
}