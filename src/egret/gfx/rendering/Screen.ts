//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

/**
 * @internal
 */
namespace elf {

    /**
     * @internal
     */
    export interface Screen {
        /**
         * Indicates the width of the screen, in pixels. It contains the scaleFactor property.
         */
        readonly width:number;

        /**
         * Indicates the height of the screen, in pixels. It contains the scaleFactor property.
         */
        readonly height:number;

        /**
         * Specifies the effective pixel scaling factor of the screen. This value is 1 on standard screens and doubled on
         * HiDPI (Retina display) screens.
         */
        readonly scaleFactor:number;

        /**
         * A render buffer instance associated with the screen. Anything drew to it will show on the screen. <br/>
         */
        readonly buffer:RenderBuffer;

        /**
         * Sets the background color of the screen.
         */
        setColor(value:number):void;

        /**
         * Applies the stage display rule.
         */
        applyDisplayRule(rule:egret.sys.StageDisplayRule):void;

        /**
         * Call to ensure all drawing to the render buffer has been applied to the easel. This method is usually called
         * at the end of one drawing session
         */
        present():void;


    }
}