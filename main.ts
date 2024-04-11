input.onButtonPressed(Button.A, function () {
    CutebotPro.runBlockCnt(3)
})
input.onButtonPressed(Button.B, function () {
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, CutebotProAngle.Angle90)
    CutebotPro.runBlockCnt(3)
})
CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xff0000)
CutebotPro.setBlockCnt(5, CutebotProDistanceUnits.Ft)
