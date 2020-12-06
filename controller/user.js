const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userModel = require('../model/user')

exports.user_register = (req, res) => {

    //이메일 유무체크 -> 패스워드 암호화 -> 데이터베이스에 유저정보 저장

    const { username, email, password } = req.body

    userModel
        .findOne({email})
        .then(user => {
            if(user) {
                return res.json ({
                    msg: "이미 존재하는 메일입니다."
                })
            } else {
                bcrypt.hash (password, 10, (err,hash) => {
                    if(err) {
                        return res.json({
                            error: err
                        })
                    } else {

                        const userInfo = new userModel({
                            username,
                            email,
                            password:hash
                        })

                        userInfo
                            .save()
                            .then(user => {
                                res.json({
                                    msg: "회원가입 완료.",
                                    userInfo: user
                                })
                            })
                            .catch(err => {
                                res.json({
                                    msg: err.message
                                })
                            })
                    }
                })
            }
        })
};

exports.user_login = (req, res) => {

    //이메일 유무체크 - 패스워드 매칭 - 접속유저정보 뿌려주기(jwt 생성)

    const { password, email } = req.body
    userModel
        .findOne({email })
        .then(user => {
            if(!user) {
                return res.json({
                    msg: "등록되지 않은 이메일입니다. 선회원가입 "
                })
            } else {
                bcrypt.compare(password, user.password, (err, isMatch) => {

                    if(err || isMatch === false) {
                        return res.json({
                            msg: "Auth failed(password 틀림)"
                        })
                    } else {
                        // res.json(user)

                        //jwt 생성
                        const token = jwt.sign(
                            {id:user._id, email: user.email},
                            process.env.SECRET_KEY,
                            {expiresIn: "1d"}
                        )
                        res.json({
                            msg: "Auth successful",
                            tokenInfo: token
                        })
                    }
                })
            }
        })
        .catch(err => {
            res.json({
                err: err.message
            })
        })
};