/* eslint-disable react/jsx-key */
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

export const SocialMediaIcons = [
   <Link href="/">{React.createElement(FaXTwitter)}</Link>,
   <Link href="/">{React.createElement(BsYoutube)}</Link>,
   <Link href="/">{React.createElement(BsFacebook)}</Link>,
   <Link href="/">{React.createElement(BsInstagram)}</Link>,
   <Link href="/">{React.createElement(BsLinkedin)}</Link>,
   <Link href="/">{React.createElement(FaGithub)}</Link>,
]
