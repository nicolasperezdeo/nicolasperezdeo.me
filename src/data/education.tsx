import { TimelineDataObject, EducationData } from "@/types";
import * as React from "react";

const UPF_DEGREE : EducationData = {
    headingIcon: 'fa-university', 
    period: 'June 2012 - December 2015', 
    iconURL: 'UPF_LOGO.png', 
    place: 'Barcelona, Spain',
    university: 'Universitat Pompeu Fabra (UPF)', 
    GPA: '8.22 / 10 (2nd of promotion)', 
    degree: 'Telecommunication Engineering, Computer Sciences', 
    specialization: [
        <div>Image Processing and Machine Learning</div>,
        <div>Sound and Signal Processing</div>,
        <div>Developing Full Stack applications</div>
    ], 
    courses: [
        <div>Computer Sciences Courses on Fundamentals</div>,
        <div>Sound and Image Processing courses, with emphasis on Machine Learning</div>,
        <div>Fundamental Courses on Mathemathics and Physics</div>
    ]
}

const RMIT_DEGREE : EducationData = {
    headingIcon: 'fa-robot', 
    period: 'December 2015 - July 2016', 
    iconURL: 'RMIT_LOGO.jpg', 
    place: 'Melbourne, Australia',
    university: 'Royal Melbourne Institute of Technology (RMIT)', 
    GPA: '9.12 / 10', 
    degree: 'Computer Sciences', 
    specialization: [
        <div>Artificial Intelligence and algorithm programming in C, ProLog</div>,
        <div>Computer Graphics using Javascript / Three.JS</div>,
        <div>Virtual/Augmented Reality project using Unity3D and Vuforia + Google Cardboard</div>
    ], 
    courses: [
        <div>Courses on Artificial Intelligence, Computer Graphics</div>,
        <div>A project on VR/AR using Unity3D, structured with Git</div>,
    ]
}

const UPF_MASTER : EducationData = {
    headingIcon: 'fa-briefcase-medical', 
    period: 'September 2016 - July 2017', 
    iconURL: 'UPF_LOGO.png', 
    university: 'Universitat Pompeu Fabra (UPF)', 
    place: 'Barcelona, Spain',
    GPA: '9.15 / 10', 
    degree: 'Msc. in Computational Biomedical Engineering', 
    specialization: [
        <div>Algorithm programming in Python</div>,
        <div>Application programming and Computer Graphics for Medical Data</div>,
    ], 
    courses: [
        <div>Courses on Machine Learning, Complexity Science, Advanced Signal Analysis, Surgery Planning</div>,
        <div>Academic Seminars on Machine Learning on Medicine and other topics organized by BCN MedTech</div>,
        <div>Python and MATLAB Programming for Biomedical sciences</div>
    ]
}
const dataObject : TimelineDataObject[] = [
    {id: 'header', medium: true, data: 'Now'},
    {id: 'item', data: UPF_MASTER},
    {id: 'item', data: RMIT_DEGREE},
    {id: 'item', data: UPF_DEGREE},
    {id: 'header', medium: true, data: '2012'}
] ;

//Data object
export default dataObject