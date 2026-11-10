for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 27)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 27)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
