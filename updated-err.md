Compiled with problems:
×
ERROR in ./node_modules/@coinbase/cds-common/esm/dates/getTimesFromDatesAndRanges.js 1:0-52
  × Module not found: Can't resolve './getMidnightDate' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/dates'
   ╭─[1:32]
 1 │ import { getMidnightDate } from './getMidnightDate';
   ·                                 ───────────────────
 2 │ 
 3 │ /**
   ╰────
  help: Did you mean './getMidnightDate.js'?
        
        The request './getMidnightDate' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/hooks/useEventHandler.js 2:0-37
  × Module not found: Can't resolve 'lodash/isEmpty' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/hooks'
   ╭─[2:20]
 1 │ import { useCallback, useContext } from 'react';
 2 │ import isEmpty from 'lodash/isEmpty';
   ·                     ────────────────
 3 │ import { EventHandlerContext } from '../system/EventHandlerProvider';
 4 │ const noOp = () => {};
   ╰────
  help: Did you mean '/Users/graycup/Documents/GitHub/docs/node_modules/lodash/isEmpty.js'?
        
        The request 'lodash/isEmpty' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/hooks/useEventHandler.js 3:0-69
  × Module not found: Can't resolve '../system/EventHandlerProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/hooks'
   ╭─[3:36]
 1 │ import { useCallback, useContext } from 'react';
 2 │ import isEmpty from 'lodash/isEmpty';
 3 │ import { EventHandlerContext } from '../system/EventHandlerProvider';
   ·                                     ────────────────────────────────
 4 │ const noOp = () => {};
 5 │ export const useEventHandler = (component, action, eventConfig, analyticsId) => {
   ╰────
  help: Did you mean '../system/EventHandlerProvider.js'?
        
        The request '../system/EventHandlerProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/hooks/useFallbackShape.js 2:0-59
  × Module not found: Can't resolve '../tokens/borderRadius' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/hooks'
   ╭─[2:34]
 1 │ import { useMemo } from 'react';
 2 │ import { shapeBorderRadius } from '../tokens/borderRadius';
   ·                                   ────────────────────────
 3 │ const WIDTH_MODIFIERS = [0.5, 0, 0.6, 0.8, 0.1, 0.9, 0.4, 0.2, 0.7, 0.3];
 4 │ export function useFallbackShape(shape, baseWidth, options) {
   ╰────
  help: Did you mean '../tokens/borderRadius.js'?
        
        The request '../tokens/borderRadius' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/hooks/useMergeRefs.js 5:0-50
  × Module not found: Can't resolve '../utils/mergeRefs' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/hooks'
   ╭─[5:29]
 3 │  * @deprecationExpectedRemoval v10
 4 │  */
 5 │ export { useMergeRefs } from '../utils/mergeRefs';
   ·                              ────────────────────
   ╰────
  help: Did you mean '../utils/mergeRefs.js'?
        
        The request '../utils/mergeRefs' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/hooks/useSort.js 2:0-29
  × Module not found: Can't resolve 'lodash/get' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/hooks'
   ╭─[2:16]
 1 │ import { useMemo } from 'react';
 2 │ import get from 'lodash/get';
   ·                 ────────────
 3 │ export const useSort = _ref => {
 4 │   let {
   ╰────
  help: Did you mean '/Users/graycup/Documents/GitHub/docs/node_modules/lodash/get.js'?
        
        The request 'lodash/get' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 1:0-27
  × Module not found: Can't resolve './carousel' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[1:14]
 1 │ export * from './carousel';
   ·               ────────────
 2 │ export * from './core/theme';
 3 │ export * from './hooks/useToggler';
   ╰────
  help: Did you mean './carousel/index.js'?
        
        The request './carousel' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 2:0-29
  × Module not found: Can't resolve './core/theme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[2:14]
 1 │ export * from './carousel';
 2 │ export * from './core/theme';
   ·               ──────────────
 3 │ export * from './hooks/useToggler';
 4 │ export * from './lottie/lottieUtils';
   ╰────
  help: Did you mean './core/theme.js'?
        
        The request './core/theme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 3:0-35
  × Module not found: Can't resolve './hooks/useToggler' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[3:14]
 1 │ export * from './carousel';
 2 │ export * from './core/theme';
 3 │ export * from './hooks/useToggler';
   ·               ────────────────────
 4 │ export * from './lottie/lottieUtils';
 5 │ export * from './lottie/statusToAccessibilityLabel';
   ╰────
  help: Did you mean './hooks/useToggler.js'?
        
        The request './hooks/useToggler' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 4:0-37
  × Module not found: Can't resolve './lottie/lottieUtils' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[4:14]
 2 │ export * from './core/theme';
 3 │ export * from './hooks/useToggler';
 4 │ export * from './lottie/lottieUtils';
   ·               ──────────────────────
 5 │ export * from './lottie/statusToAccessibilityLabel';
 6 │ export * from './lottie/useStatusAnimationPoller';
   ╰────
  help: Did you mean './lottie/lottieUtils.js'?
        
        The request './lottie/lottieUtils' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 5:0-52
  × Module not found: Can't resolve './lottie/statusToAccessibilityLabel' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[5:14]
 3 │ export * from './hooks/useToggler';
 4 │ export * from './lottie/lottieUtils';
 5 │ export * from './lottie/statusToAccessibilityLabel';
   ·               ─────────────────────────────────────
 6 │ export * from './lottie/useStatusAnimationPoller';
 7 │ export * from './types';
   ╰────
  help: Did you mean './lottie/statusToAccessibilityLabel.js'?
        
        The request './lottie/statusToAccessibilityLabel' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 6:0-50
  × Module not found: Can't resolve './lottie/useStatusAnimationPoller' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[6:14]
 4 │ export * from './lottie/lottieUtils';
 5 │ export * from './lottie/statusToAccessibilityLabel';
 6 │ export * from './lottie/useStatusAnimationPoller';
   ·               ───────────────────────────────────
 7 │ export * from './types';
 8 │ export * from './utils/getWidthInEm';
   ╰────
  help: Did you mean './lottie/useStatusAnimationPoller.js'?
        
        The request './lottie/useStatusAnimationPoller' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 7:0-24
  × Module not found: Can't resolve './types' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[7:14]
 5 │ export * from './lottie/statusToAccessibilityLabel';
 6 │ export * from './lottie/useStatusAnimationPoller';
 7 │ export * from './types';
   ·               ─────────
 8 │ export * from './utils/getWidthInEm';
 9 │ export * from './utils/join';
   ╰────
  help: Did you mean './types/index.js'?
        
        The request './types' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 8:0-37
  × Module not found: Can't resolve './utils/getWidthInEm' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[8:14]
 6 │ export * from './lottie/useStatusAnimationPoller';
 7 │ export * from './types';
 8 │ export * from './utils/getWidthInEm';
   ·               ──────────────────────
 9 │ export * from './utils/join';
   ╰────
  help: Did you mean './utils/getWidthInEm.js'?
        
        The request './utils/getWidthInEm' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/index.js 9:0-29
  × Module not found: Can't resolve './utils/join' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm'
   ╭─[9:14]
 7 │ export * from './types';
 8 │ export * from './utils/getWidthInEm';
 9 │ export * from './utils/join';
   ·               ──────────────
   ╰────
  help: Did you mean './utils/join.js'?
        
        The request './utils/join' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/internal/visualizations/SparklineInteractiveData.js 6:0-51
  × Module not found: Can't resolve '../data/asset' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/internal/visualizations'
   ╭─[6:35]
 4 │ function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
 5 │ function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 6 │ import { asset as assetJSON } from '../data/asset';
   ·                                    ───────────────
 7 │ const transformAndFilterPrices = data => {
 8 │   // Filters out null timestamps and corrects the type
   ╰────
  help: Did you mean '../data/asset.js'?
        
        The request '../data/asset' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/motion/tokens.js 6:0-44
  × Module not found: Can't resolve './utils' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/motion'
   ╭─[6:34]
 4 │ function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
 5 │ function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 6 │ import { generateAnimToken } from './utils';
   ·                                   ─────────
 7 │ export const curves = {
 8 │   global: [0.6, 0, 0.15, 1],
   ╰────
  help: Did you mean './utils.js'?
        
        The request './utils' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/overlays/ToastProvider.js 2:0-48
  × Module not found: Can't resolve './useToastQueue' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/overlays'
   ╭─[2:30]
 1 │ import React, { cloneElement, createContext, isValidElement, useMemo } from 'react';
 2 │ import { useToastQueue } from './useToastQueue';
   ·                               ─────────────────
 3 │ 
 4 │ /**
   ╰────
  help: Did you mean './useToastQueue.js'?
        
        The request './useToastQueue' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/overlays/useAlert.js 1:0-42
  × Module not found: Can't resolve './useOverlay' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/overlays'
   ╭─[1:27]
 1 │ import { useOverlay } from './useOverlay';
   ·                            ──────────────
 2 │ 
 3 │ /**
   ╰────
  help: Did you mean './useOverlay.js'?
        
        The request './useOverlay' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/overlays/useModal.js 2:0-42
  × Module not found: Can't resolve './useOverlay' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/overlays'
   ╭─[2:27]
 1 │ import { useMemo } from 'react';
 2 │ import { useOverlay } from './useOverlay';
   ·                            ──────────────
 3 │ 
 4 │ /**
   ╰────
  help: Did you mean './useOverlay.js'?
        
        The request './useOverlay' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/overlays/usePortal.js 3:0-48
  × Module not found: Can't resolve './PortalContext' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/overlays'
   ╭─[3:30]
 1 │ import { useContext } from 'react';
 2 │ import { isProduction } from '@coinbase/cds-utils';
 3 │ import { PortalContext } from './PortalContext';
   ·                               ─────────────────
 4 │ export const usePortal = () => {
 5 │   const context = useContext(PortalContext);
   ╰────
  help: Did you mean './PortalContext.js'?
        
        The request './PortalContext' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/overlays/usePortal.js
  × ESModulesLinkingError: export 'isProduction' (imported as 'isProduction') was not found in '@coinbase/cds-utils' (module has no exports)
   ╭─[6:7]
 4 │ export const usePortal = () => {
 5 │   const context = useContext(PortalContext);
 6 │   if (!isProduction() && !context) {
   ·        ────────────
 7 │     console.error('Cannot use `usePortal` outside of PortalProvider');
 8 │   }
   ╰────
ERROR in ./node_modules/@coinbase/cds-common/esm/stepper/useStepper.js 2:0-39
  × Module not found: Can't resolve './utils' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/stepper'
   ╭─[2:29]
 1 │ import { useCallback, useMemo, useState } from 'react';
 2 │ import { flattenSteps } from './utils';
   ·                              ─────────
 3 │ /**
 4 │  * A hook for managing StepperHorizontal or StepperVertical state.
   ╰────
  help: Did you mean './utils.js'?
        
        The request './utils' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/tokens/card.js 1:0-73
  × Module not found: Can't resolve '../utils/convertDimensionToSize' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/tokens'
   ╭─[1:39]
 1 │ import { convertDimensionToSize } from '../utils/convertDimensionToSize';
   ·                                        ─────────────────────────────────
 2 │ export const cardSizes = {
 3 │   small: {
   ╰────
  help: Did you mean '../utils/convertDimensionToSize.js'?
        
        The request '../utils/convertDimensionToSize' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/tokens/cell.js 1:0-34
  × Module not found: Can't resolve './sizing' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/tokens'
   ╭─[1:23]
 1 │ import { gutter } from './sizing';
   ·                        ──────────
 2 │ export const mediaSize = 32;
 3 │ 
   ╰────
  help: Did you mean './sizing.js'?
        
        The request './sizing' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/visualizations/useSparklineArea.js 11:0-72
  × Module not found: Can't resolve './useSparklinePathGenerator' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/visualizations'
    ╭─[11:42]
  9 │ import { useCallback } from 'react';
 10 │ import { area, curveBasis } from 'd3-shape';
 11 │ import { useSparklinePathGenerator } from './useSparklinePathGenerator';
    ·                                           ─────────────────────────────
 12 │ export const useSparklineArea = _ref => {
 13 │   let {
    ╰────
  help: Did you mean './useSparklinePathGenerator.js'?
        
        The request './useSparklinePathGenerator' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-common/esm/visualizations/useSparklinePath.js 8:0-72
  × Module not found: Can't resolve './useSparklinePathGenerator' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-common/esm/visualizations'
    ╭─[8:42]
  6 │ import { useCallback } from 'react';
  7 │ import { curveBasis, line } from 'd3-shape';
  8 │ import { useSparklinePathGenerator } from './useSparklinePathGenerator';
    ·                                           ─────────────────────────────
  9 │ export const useSparklinePath = props => {
 10 │   const generator = useCallback(_ref => {
    ╰────
  help: Did you mean './useSparklinePathGenerator.js'?
        
        The request './useSparklinePathGenerator' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 1:0-36
  × Module not found: Can't resolve './activityIndicator' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
   ╭─[1:14]
 1 │ export * from './activityIndicator';
   ·               ─────────────────────
 2 │ export * from './chartFallbackNegative';
 3 │ export * from './chartFallbackPositive';
   ╰────
  help: Did you mean './activityIndicator/index.js'?
        
        The request './activityIndicator' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 2:0-40
  × Module not found: Can't resolve './chartFallbackNegative' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
   ╭─[2:14]
 1 │ export * from './activityIndicator';
 2 │ export * from './chartFallbackNegative';
   ·               ─────────────────────────
 3 │ export * from './chartFallbackPositive';
 4 │ export * from './dappWallet';
   ╰────
  help: Did you mean './chartFallbackNegative/index.js'?
        
        The request './chartFallbackNegative' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 3:0-40
  × Module not found: Can't resolve './chartFallbackPositive' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
   ╭─[3:14]
 1 │ export * from './activityIndicator';
 2 │ export * from './chartFallbackNegative';
 3 │ export * from './chartFallbackPositive';
   ·               ─────────────────────────
 4 │ export * from './dappWallet';
 5 │ export * from './earnComplete';
   ╰────
  help: Did you mean './chartFallbackPositive/index.js'?
        
        The request './chartFallbackPositive' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 4:0-29
  × Module not found: Can't resolve './dappWallet' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
   ╭─[4:14]
 2 │ export * from './chartFallbackNegative';
 3 │ export * from './chartFallbackPositive';
 4 │ export * from './dappWallet';
   ·               ──────────────
 5 │ export * from './earnComplete';
 6 │ export * from './earnTask';
   ╰────
  help: Did you mean './dappWallet/index.js'?
        
        The request './dappWallet' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 5:0-31
  × Module not found: Can't resolve './earnComplete' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
   ╭─[5:14]
 3 │ export * from './chartFallbackPositive';
 4 │ export * from './dappWallet';
 5 │ export * from './earnComplete';
   ·               ────────────────
 6 │ export * from './earnTask';
 7 │ export * from './gift';
   ╰────
  help: Did you mean './earnComplete/index.js'?
        
        The request './earnComplete' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 6:0-27
  × Module not found: Can't resolve './earnTask' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
   ╭─[6:14]
 4 │ export * from './dappWallet';
 5 │ export * from './earnComplete';
 6 │ export * from './earnTask';
   ·               ────────────
 7 │ export * from './gift';
 8 │ export * from './giftingZoom';
   ╰────
  help: Did you mean './earnTask/index.js'?
        
        The request './earnTask' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 7:0-23
  × Module not found: Can't resolve './gift' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
   ╭─[7:14]
 5 │ export * from './earnComplete';
 6 │ export * from './earnTask';
 7 │ export * from './gift';
   ·               ────────
 8 │ export * from './giftingZoom';
 9 │ export * from './globalTradeButton';
   ╰────
  help: Did you mean './gift/index.js'?
        
        The request './gift' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 8:0-30
  × Module not found: Can't resolve './giftingZoom' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
    ╭─[8:14]
  6 │ export * from './earnTask';
  7 │ export * from './gift';
  8 │ export * from './giftingZoom';
    ·               ───────────────
  9 │ export * from './globalTradeButton';
 10 │ export * from './nux';
    ╰────
  help: Did you mean './giftingZoom/index.js'?
        
        The request './giftingZoom' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 9:0-36
  × Module not found: Can't resolve './globalTradeButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
    ╭─[9:14]
  7 │ export * from './gift';
  8 │ export * from './giftingZoom';
  9 │ export * from './globalTradeButton';
    ·               ─────────────────────
 10 │ export * from './nux';
 11 │ export * from './splash';
    ╰────
  help: Did you mean './globalTradeButton/index.js'?
        
        The request './globalTradeButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 10:0-22
  × Module not found: Can't resolve './nux' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
    ╭─[10:14]
  8 │ export * from './giftingZoom';
  9 │ export * from './globalTradeButton';
 10 │ export * from './nux';
    ·               ───────
 11 │ export * from './splash';
 12 │ export * from './tradeStatus';
    ╰────
  help: Did you mean './nux/index.js'?
        
        The request './nux' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 11:0-25
  × Module not found: Can't resolve './splash' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
    ╭─[11:14]
  9 │ export * from './globalTradeButton';
 10 │ export * from './nux';
 11 │ export * from './splash';
    ·               ──────────
 12 │ export * from './tradeStatus';
 13 │ export * from './watchListStar';
    ╰────
  help: Did you mean './splash/index.js'?
        
        The request './splash' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 12:0-30
  × Module not found: Can't resolve './tradeStatus' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
    ╭─[12:14]
 10 │ export * from './nux';
 11 │ export * from './splash';
 12 │ export * from './tradeStatus';
    ·               ───────────────
 13 │ export * from './watchListStar';
    ╰────
  help: Did you mean './tradeStatus/index.js'?
        
        The request './tradeStatus' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-lottie-files/esm/index.js 13:0-32
  × Module not found: Can't resolve './watchListStar' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-lottie-files/esm'
    ╭─[13:14]
 11 │ export * from './splash';
 12 │ export * from './tradeStatus';
 13 │ export * from './watchListStar';
    ·               ─────────────────
    ╰────
  help: Did you mean './watchListStar/index.js'?
        
        The request './watchListStar' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-utils/esm/index.js 1:0-24
  × Module not found: Can't resolve './array' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-utils/esm'
   ╭─[1:14]
 1 │ export * from './array';
   ·               ─────────
 2 │ export * from './env';
 3 │ export * from './noop';
   ╰────
  help: Did you mean './array.js'?
        
        The request './array' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-utils/esm/index.js 2:0-22
  × Module not found: Can't resolve './env' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-utils/esm'
   ╭─[2:14]
 1 │ export * from './array';
 2 │ export * from './env';
   ·               ───────
 3 │ export * from './noop';
 4 │ export * from './object';
   ╰────
  help: Did you mean './env.js'?
        
        The request './env' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-utils/esm/index.js 3:0-23
  × Module not found: Can't resolve './noop' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-utils/esm'
   ╭─[3:14]
 1 │ export * from './array';
 2 │ export * from './env';
 3 │ export * from './noop';
   ·               ────────
 4 │ export * from './object';
 5 │ export * from './string';
   ╰────
  help: Did you mean './noop.js'?
        
        The request './noop' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-utils/esm/index.js 4:0-25
  × Module not found: Can't resolve './object' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-utils/esm'
   ╭─[4:14]
 2 │ export * from './env';
 3 │ export * from './noop';
 4 │ export * from './object';
   ·               ──────────
 5 │ export * from './string';
 6 │ export * from './types';
   ╰────
  help: Did you mean './object.js'?
        
        The request './object' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-utils/esm/index.js 5:0-25
  × Module not found: Can't resolve './string' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-utils/esm'
   ╭─[5:14]
 3 │ export * from './noop';
 4 │ export * from './object';
 5 │ export * from './string';
   ·               ──────────
 6 │ export * from './types';
   ╰────
  help: Did you mean './string.js'?
        
        The request './string' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-utils/esm/index.js 6:0-24
  × Module not found: Can't resolve './types' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-utils/esm'
   ╭─[6:14]
 4 │ export * from './object';
 5 │ export * from './string';
 6 │ export * from './types';
   ·               ─────────
   ╰────
  help: Did you mean './types.js'?
        
        The request './types' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/accordion/index.js 1:0-28
  × Module not found: Can't resolve './Accordion' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/accordion'
   ╭─[1:14]
 1 │ export * from './Accordion';
   ·               ─────────────
 2 │ export * from './AccordionItem';
   ╰────
  help: Did you mean './Accordion.js'?
        
        The request './Accordion' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/accordion/index.js 2:0-32
  × Module not found: Can't resolve './AccordionItem' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/accordion'
   ╭─[2:14]
 1 │ export * from './Accordion';
 2 │ export * from './AccordionItem';
   ·               ─────────────────
   ╰────
  help: Did you mean './AccordionItem.js'?
        
        The request './AccordionItem' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/combobox/Combobox.js 12:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/combobox'
    ╭─[12:35]
 10 │ import { createContext, forwardRef, memo, useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';
 11 │ import Fuse from 'fuse.js';
 12 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ·                                    ────────────────────────────────
 13 │ import { DefaultSelectControl } from '../select/DefaultSelectControl';
 14 │ import { Select } from '../select/Select';
    ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/combobox/Combobox.js 13:0-70
  × Module not found: Can't resolve '../select/DefaultSelectControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/combobox'
    ╭─[13:37]
 11 │ import Fuse from 'fuse.js';
 12 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 13 │ import { DefaultSelectControl } from '../select/DefaultSelectControl';
    ·                                      ────────────────────────────────
 14 │ import { Select } from '../select/Select';
 15 │ import { DefaultComboboxControl } from './DefaultComboboxControl';
    ╰────
  help: Did you mean '../select/DefaultSelectControl.js'?
        
        The request '../select/DefaultSelectControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/combobox/Combobox.js 14:0-42
  × Module not found: Can't resolve '../select/Select' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/combobox'
    ╭─[14:23]
 12 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 13 │ import { DefaultSelectControl } from '../select/DefaultSelectControl';
 14 │ import { Select } from '../select/Select';
    ·                        ──────────────────
 15 │ import { DefaultComboboxControl } from './DefaultComboboxControl';
 16 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../select/Select.js'?
        
        The request '../select/Select' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/combobox/Combobox.js 15:0-66
  × Module not found: Can't resolve './DefaultComboboxControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/combobox'
    ╭─[15:39]
 13 │ import { DefaultSelectControl } from '../select/DefaultSelectControl';
 14 │ import { Select } from '../select/Select';
 15 │ import { DefaultComboboxControl } from './DefaultComboboxControl';
    ·                                        ──────────────────────────
 16 │ import { jsx as _jsx } from "react/jsx-runtime";
 17 │ /**
    ╰────
  help: Did you mean './DefaultComboboxControl.js'?
        
        The request './DefaultComboboxControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/combobox/index.js 1:0-27
  × Module not found: Can't resolve './Combobox' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/combobox'
   ╭─[1:14]
 1 │ export * from './Combobox';
   ·               ────────────
 2 │ export * from './DefaultComboboxControl';
   ╰────
  help: Did you mean './Combobox.js'?
        
        The request './Combobox' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/combobox/index.js 2:0-41
  × Module not found: Can't resolve './DefaultComboboxControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/combobox'
   ╭─[2:14]
 1 │ export * from './Combobox';
 2 │ export * from './DefaultComboboxControl';
   ·               ──────────────────────────
   ╰────
  help: Did you mean './DefaultComboboxControl.js'?
        
        The request './DefaultComboboxControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/data-card/index.js 1:0-38
  × Module not found: Can't resolve './DataCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/data-card'
   ╭────
 1 │ export { DataCard } from './DataCard';
   ·                          ────────────
   ╰────
  help: Did you mean './DataCard.js'?
        
        The request './DataCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select-chip/SelectChip.js 10:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select-chip'
    ╭─[10:35]
  8 │ function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ·                                    ────────────────────────────────
 11 │ import { Select } from '../select/Select';
 12 │ import { SelectChipControl } from './SelectChipControl';
    ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select-chip/SelectChip.js 11:0-42
  × Module not found: Can't resolve '../select/Select' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select-chip'
    ╭─[11:23]
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 11 │ import { Select } from '../select/Select';
    ·                        ──────────────────
 12 │ import { SelectChipControl } from './SelectChipControl';
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../select/Select.js'?
        
        The request '../select/Select' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select-chip/SelectChip.js 12:0-56
  × Module not found: Can't resolve './SelectChipControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select-chip'
    ╭─[12:34]
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 11 │ import { Select } from '../select/Select';
 12 │ import { SelectChipControl } from './SelectChipControl';
    ·                                   ─────────────────────
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
 14 │ /**
    ╰────
  help: Did you mean './SelectChipControl.js'?
        
        The request './SelectChipControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select-chip/index.js 1:0-29
  × Module not found: Can't resolve './SelectChip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select-chip'
   ╭─[1:14]
 1 │ export * from './SelectChip';
   ·               ──────────────
 2 │ export * from './SelectChipControl';
   ╰────
  help: Did you mean './SelectChip.js'?
        
        The request './SelectChip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select-chip/index.js 2:0-36
  × Module not found: Can't resolve './SelectChipControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select-chip'
   ╭─[2:14]
 1 │ export * from './SelectChip';
 2 │ export * from './SelectChipControl';
   ·               ─────────────────────
   ╰────
  help: Did you mean './SelectChipControl.js'?
        
        The request './SelectChipControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 8:0-30
  × Module not found: Can't resolve '../../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[8:19]
  6 │ import { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
  7 │ import { autoUpdate, flip, useFloating } from '@floating-ui/react-dom';
  8 │ import { cx } from '../../cx';
    ·                    ──────────
  9 │ import { useClickOutside } from '../../hooks/useClickOutside';
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ╰────
  help: Did you mean '../../cx.js'?
        
        The request '../../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 9:0-62
  × Module not found: Can't resolve '../../hooks/useClickOutside' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[9:32]
  7 │ import { autoUpdate, flip, useFloating } from '@floating-ui/react-dom';
  8 │ import { cx } from '../../cx';
  9 │ import { useClickOutside } from '../../hooks/useClickOutside';
    ·                                 ─────────────────────────────
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 11 │ import { useHasMounted } from '../../hooks/useHasMounted';
    ╰────
  help: Did you mean '../../hooks/useClickOutside.js'?
        
        The request '../../hooks/useClickOutside' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 10:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[10:35]
  8 │ import { cx } from '../../cx';
  9 │ import { useClickOutside } from '../../hooks/useClickOutside';
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ·                                    ────────────────────────────────
 11 │ import { useHasMounted } from '../../hooks/useHasMounted';
 12 │ import { Box } from '../../layout/Box';
    ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 11:0-58
  × Module not found: Can't resolve '../../hooks/useHasMounted' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[11:30]
  9 │ import { useClickOutside } from '../../hooks/useClickOutside';
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 11 │ import { useHasMounted } from '../../hooks/useHasMounted';
    ·                               ───────────────────────────
 12 │ import { Box } from '../../layout/Box';
 13 │ import { Portal } from '../../overlays/Portal';
    ╰────
  help: Did you mean '../../hooks/useHasMounted.js'?
        
        The request '../../hooks/useHasMounted' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 12:0-39
  × Module not found: Can't resolve '../../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[12:20]
 10 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 11 │ import { useHasMounted } from '../../hooks/useHasMounted';
 12 │ import { Box } from '../../layout/Box';
    ·                     ──────────────────
 13 │ import { Portal } from '../../overlays/Portal';
 14 │ import { modalContainerId } from '../../overlays/PortalProvider';
    ╰────
  help: Did you mean '../../layout/Box.js'?
        
        The request '../../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 13:0-47
  × Module not found: Can't resolve '../../overlays/Portal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[13:23]
 11 │ import { useHasMounted } from '../../hooks/useHasMounted';
 12 │ import { Box } from '../../layout/Box';
 13 │ import { Portal } from '../../overlays/Portal';
    ·                        ───────────────────────
 14 │ import { modalContainerId } from '../../overlays/PortalProvider';
 15 │ import { DefaultSelectAllOption } from './DefaultSelectAllOption';
    ╰────
  help: Did you mean '../../overlays/Portal.js'?
        
        The request '../../overlays/Portal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 14:0-65
  × Module not found: Can't resolve '../../overlays/PortalProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[14:33]
 12 │ import { Box } from '../../layout/Box';
 13 │ import { Portal } from '../../overlays/Portal';
 14 │ import { modalContainerId } from '../../overlays/PortalProvider';
    ·                                  ───────────────────────────────
 15 │ import { DefaultSelectAllOption } from './DefaultSelectAllOption';
 16 │ import { DefaultSelectControl } from './DefaultSelectControl';
    ╰────
  help: Did you mean '../../overlays/PortalProvider.js'?
        
        The request '../../overlays/PortalProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 15:0-66
  × Module not found: Can't resolve './DefaultSelectAllOption' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[15:39]
 13 │ import { Portal } from '../../overlays/Portal';
 14 │ import { modalContainerId } from '../../overlays/PortalProvider';
 15 │ import { DefaultSelectAllOption } from './DefaultSelectAllOption';
    ·                                        ──────────────────────────
 16 │ import { DefaultSelectControl } from './DefaultSelectControl';
 17 │ import { DefaultSelectDropdown } from './DefaultSelectDropdown';
    ╰────
  help: Did you mean './DefaultSelectAllOption.js'?
        
        The request './DefaultSelectAllOption' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 16:0-62
  × Module not found: Can't resolve './DefaultSelectControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[16:37]
 14 │ import { modalContainerId } from '../../overlays/PortalProvider';
 15 │ import { DefaultSelectAllOption } from './DefaultSelectAllOption';
 16 │ import { DefaultSelectControl } from './DefaultSelectControl';
    ·                                      ────────────────────────
 17 │ import { DefaultSelectDropdown } from './DefaultSelectDropdown';
 18 │ import { DefaultSelectEmptyDropdownContents } from './DefaultSelectEmptyDropdownContents';
    ╰────
  help: Did you mean './DefaultSelectControl.js'?
        
        The request './DefaultSelectControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 17:0-64
  × Module not found: Can't resolve './DefaultSelectDropdown' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[17:38]
 15 │ import { DefaultSelectAllOption } from './DefaultSelectAllOption';
 16 │ import { DefaultSelectControl } from './DefaultSelectControl';
 17 │ import { DefaultSelectDropdown } from './DefaultSelectDropdown';
    ·                                       ─────────────────────────
 18 │ import { DefaultSelectEmptyDropdownContents } from './DefaultSelectEmptyDropdownContents';
 19 │ import { DefaultSelectOption } from './DefaultSelectOption';
    ╰────
  help: Did you mean './DefaultSelectDropdown.js'?
        
        The request './DefaultSelectDropdown' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 18:0-90
  × Module not found: Can't resolve './DefaultSelectEmptyDropdownContents' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[18:51]
 16 │ import { DefaultSelectControl } from './DefaultSelectControl';
 17 │ import { DefaultSelectDropdown } from './DefaultSelectDropdown';
 18 │ import { DefaultSelectEmptyDropdownContents } from './DefaultSelectEmptyDropdownContents';
    ·                                                    ──────────────────────────────────────
 19 │ import { DefaultSelectOption } from './DefaultSelectOption';
 20 │ import { DefaultSelectOptionGroup } from './DefaultSelectOptionGroup';
    ╰────
  help: Did you mean './DefaultSelectEmptyDropdownContents.js'?
        
        The request './DefaultSelectEmptyDropdownContents' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 19:0-60
  × Module not found: Can't resolve './DefaultSelectOption' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[19:36]
 17 │ import { DefaultSelectDropdown } from './DefaultSelectDropdown';
 18 │ import { DefaultSelectEmptyDropdownContents } from './DefaultSelectEmptyDropdownContents';
 19 │ import { DefaultSelectOption } from './DefaultSelectOption';
    ·                                     ───────────────────────
 20 │ import { DefaultSelectOptionGroup } from './DefaultSelectOptionGroup';
 21 │ 
    ╰────
  help: Did you mean './DefaultSelectOption.js'?
        
        The request './DefaultSelectOption' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 20:0-70
  × Module not found: Can't resolve './DefaultSelectOptionGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[20:41]
 18 │ import { DefaultSelectEmptyDropdownContents } from './DefaultSelectEmptyDropdownContents';
 19 │ import { DefaultSelectOption } from './DefaultSelectOption';
 20 │ import { DefaultSelectOptionGroup } from './DefaultSelectOptionGroup';
    ·                                          ────────────────────────────
 21 │ 
 22 │ // Re-export all types for backward compatibility
    ╰────
  help: Did you mean './DefaultSelectOptionGroup.js'?
        
        The request './DefaultSelectOptionGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/Select.js 25:0-46
  × Module not found: Can't resolve './types' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
    ╭─[25:36]
 23 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 24 │ // Re-export the type guard function
 25 │ export { isSelectOptionGroup } from './types';
    ·                                     ─────────
 26 │ export const defaultAccessibilityRoles = {
 27 │   dropdown: 'listbox',
    ╰────
  help: Did you mean './types.js'?
        
        The request './types' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 1:0-41
  × Module not found: Can't resolve './DefaultSelectAllOption' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[1:14]
 1 │ export * from './DefaultSelectAllOption';
   ·               ──────────────────────────
 2 │ export * from './DefaultSelectControl';
 3 │ export * from './DefaultSelectDropdown';
   ╰────
  help: Did you mean './DefaultSelectAllOption.js'?
        
        The request './DefaultSelectAllOption' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 2:0-39
  × Module not found: Can't resolve './DefaultSelectControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[2:14]
 1 │ export * from './DefaultSelectAllOption';
 2 │ export * from './DefaultSelectControl';
   ·               ────────────────────────
 3 │ export * from './DefaultSelectDropdown';
 4 │ export * from './DefaultSelectEmptyDropdownContents';
   ╰────
  help: Did you mean './DefaultSelectControl.js'?
        
        The request './DefaultSelectControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 3:0-40
  × Module not found: Can't resolve './DefaultSelectDropdown' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[3:14]
 1 │ export * from './DefaultSelectAllOption';
 2 │ export * from './DefaultSelectControl';
 3 │ export * from './DefaultSelectDropdown';
   ·               ─────────────────────────
 4 │ export * from './DefaultSelectEmptyDropdownContents';
 5 │ export * from './DefaultSelectOption';
   ╰────
  help: Did you mean './DefaultSelectDropdown.js'?
        
        The request './DefaultSelectDropdown' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 4:0-53
  × Module not found: Can't resolve './DefaultSelectEmptyDropdownContents' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[4:14]
 2 │ export * from './DefaultSelectControl';
 3 │ export * from './DefaultSelectDropdown';
 4 │ export * from './DefaultSelectEmptyDropdownContents';
   ·               ──────────────────────────────────────
 5 │ export * from './DefaultSelectOption';
 6 │ export * from './DefaultSelectOptionGroup';
   ╰────
  help: Did you mean './DefaultSelectEmptyDropdownContents.js'?
        
        The request './DefaultSelectEmptyDropdownContents' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 5:0-38
  × Module not found: Can't resolve './DefaultSelectOption' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[5:14]
 3 │ export * from './DefaultSelectDropdown';
 4 │ export * from './DefaultSelectEmptyDropdownContents';
 5 │ export * from './DefaultSelectOption';
   ·               ───────────────────────
 6 │ export * from './DefaultSelectOptionGroup';
 7 │ export * from './Select';
   ╰────
  help: Did you mean './DefaultSelectOption.js'?
        
        The request './DefaultSelectOption' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 6:0-43
  × Module not found: Can't resolve './DefaultSelectOptionGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[6:14]
 4 │ export * from './DefaultSelectEmptyDropdownContents';
 5 │ export * from './DefaultSelectOption';
 6 │ export * from './DefaultSelectOptionGroup';
   ·               ────────────────────────────
 7 │ export * from './Select';
 8 │ export * from './types';
   ╰────
  help: Did you mean './DefaultSelectOptionGroup.js'?
        
        The request './DefaultSelectOptionGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 7:0-25
  × Module not found: Can't resolve './Select' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[7:14]
 5 │ export * from './DefaultSelectOption';
 6 │ export * from './DefaultSelectOptionGroup';
 7 │ export * from './Select';
   ·               ──────────
 8 │ export * from './types';
   ╰────
  help: Did you mean './Select.js'?
        
        The request './Select' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/select/index.js 8:0-24
  × Module not found: Can't resolve './types' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/select'
   ╭─[8:14]
 6 │ export * from './DefaultSelectOptionGroup';
 7 │ export * from './Select';
 8 │ export * from './types';
   ·               ─────────
   ╰────
  help: Did you mean './types.js'?
        
        The request './types' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips/TabbedChips.js 12:0-50
  × Module not found: Can't resolve '../../chips/MediaChip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips'
    ╭─[12:26]
 10 │ import React, { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
 11 │ import { useTabsContext } from '@coinbase/cds-common/tabs/TabsContext';
 12 │ import { MediaChip } from '../../chips/MediaChip';
    ·                           ───────────────────────
 13 │ import { cx } from '../../cx';
 14 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ╰────
  help: Did you mean '../../chips/MediaChip.js'?
        
        The request '../../chips/MediaChip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips/TabbedChips.js 13:0-30
  × Module not found: Can't resolve '../../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips'
    ╭─[13:19]
 11 │ import { useTabsContext } from '@coinbase/cds-common/tabs/TabsContext';
 12 │ import { MediaChip } from '../../chips/MediaChip';
 13 │ import { cx } from '../../cx';
    ·                    ──────────
 14 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 15 │ import { useHorizontalScrollToTarget } from '../../hooks/useHorizontalScrollToTarget';
    ╰────
  help: Did you mean '../../cx.js'?
        
        The request '../../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips/TabbedChips.js 14:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips'
    ╭─[14:35]
 12 │ import { MediaChip } from '../../chips/MediaChip';
 13 │ import { cx } from '../../cx';
 14 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ·                                    ────────────────────────────────
 15 │ import { useHorizontalScrollToTarget } from '../../hooks/useHorizontalScrollToTarget';
 16 │ import { HStack } from '../../layout';
    ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips/TabbedChips.js 15:0-86
  × Module not found: Can't resolve '../../hooks/useHorizontalScrollToTarget' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips'
    ╭─[15:44]
 13 │ import { cx } from '../../cx';
 14 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 15 │ import { useHorizontalScrollToTarget } from '../../hooks/useHorizontalScrollToTarget';
    ·                                             ─────────────────────────────────────────
 16 │ import { HStack } from '../../layout';
 17 │ import { Paddle, Tabs } from '../../tabs';
    ╰────
  help: Did you mean '../../hooks/useHorizontalScrollToTarget.js'?
        
        The request '../../hooks/useHorizontalScrollToTarget' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips/TabbedChips.js 16:0-38
  × Module not found: Can't resolve '../../layout' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips'
    ╭─[16:23]
 14 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 15 │ import { useHorizontalScrollToTarget } from '../../hooks/useHorizontalScrollToTarget';
 16 │ import { HStack } from '../../layout';
    ·                        ──────────────
 17 │ import { Paddle, Tabs } from '../../tabs';
 18 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../../layout/index.js'?
        
        The request '../../layout' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips/TabbedChips.js 17:0-42
  × Module not found: Can't resolve '../../tabs' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/alpha/tabbed-chips'
    ╭─[17:29]
 15 │ import { useHorizontalScrollToTarget } from '../../hooks/useHorizontalScrollToTarget';
 16 │ import { HStack } from '../../layout';
 17 │ import { Paddle, Tabs } from '../../tabs';
    ·                              ────────────
 18 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 19 │ const containerCss = "containerCss-cb6ypby";
    ╰────
  help: Did you mean '../../tabs/index.js'?
        
        The request '../../tabs' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/animation/index.js 1:0-25
  × Module not found: Can't resolve './Lottie' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/animation'
   ╭─[1:14]
 1 │ export * from './Lottie';
   ·               ──────────
 2 │ export * from './LottieStatusAnimation';
   ╰────
  help: Did you mean './Lottie.js'?
        
        The request './Lottie' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/animation/index.js 2:0-40
  × Module not found: Can't resolve './LottieStatusAnimation' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/animation'
   ╭─[2:14]
 1 │ export * from './Lottie';
 2 │ export * from './LottieStatusAnimation';
   ·               ─────────────────────────
   ╰────
  help: Did you mean './LottieStatusAnimation.js'?
        
        The request './LottieStatusAnimation' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 11:0-45
  × Module not found: Can't resolve '../collapsible' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[11:28]
  9 │ import React, { forwardRef, isValidElement, memo, useCallback, useId, useMemo, useState } from 'react';
 10 │ import { bannerMinWidth, variants } from '@coinbase/cds-common/tokens/banner';
 11 │ import { Collapsible } from '../collapsible';
    ·                             ────────────────
 12 │ import { cx } from '../cx';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ╰────
  help: Did you mean '../collapsible/index.js'?
        
        The request '../collapsible' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 12:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[12:19]
 10 │ import { bannerMinWidth, variants } from '@coinbase/cds-common/tokens/banner';
 11 │ import { Collapsible } from '../collapsible';
 12 │ import { cx } from '../cx';
    ·                    ───────
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Icon } from '../icons/Icon';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 13:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[13:35]
 11 │ import { Collapsible } from '../collapsible';
 12 │ import { cx } from '../cx';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 14 │ import { Icon } from '../icons/Icon';
 15 │ import { Box, HStack, VStack } from '../layout';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 14:0-37
  × Module not found: Can't resolve '../icons/Icon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[14:21]
 12 │ import { cx } from '../cx';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Icon } from '../icons/Icon';
    ·                      ───────────────
 15 │ import { Box, HStack, VStack } from '../layout';
 16 │ import { Pressable } from '../system/Pressable';
    ╰────
  help: Did you mean '../icons/Icon.js'?
        
        The request '../icons/Icon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 15:0-48
  × Module not found: Can't resolve '../layout' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[15:36]
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Icon } from '../icons/Icon';
 15 │ import { Box, HStack, VStack } from '../layout';
    ·                                     ───────────
 16 │ import { Pressable } from '../system/Pressable';
 17 │ import { Link } from '../typography/Link';
    ╰────
  help: Did you mean '../layout/index.js'?
        
        The request '../layout' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 16:0-48
  × Module not found: Can't resolve '../system/Pressable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[16:26]
 14 │ import { Icon } from '../icons/Icon';
 15 │ import { Box, HStack, VStack } from '../layout';
 16 │ import { Pressable } from '../system/Pressable';
    ·                           ─────────────────────
 17 │ import { Link } from '../typography/Link';
 18 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../system/Pressable.js'?
        
        The request '../system/Pressable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 17:0-42
  × Module not found: Can't resolve '../typography/Link' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[17:21]
 15 │ import { Box, HStack, VStack } from '../layout';
 16 │ import { Pressable } from '../system/Pressable';
 17 │ import { Link } from '../typography/Link';
    ·                      ────────────────────
 18 │ import { Text } from '../typography/Text';
 19 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../typography/Link.js'?
        
        The request '../typography/Link' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/Banner.js 18:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
    ╭─[18:21]
 16 │ import { Pressable } from '../system/Pressable';
 17 │ import { Link } from '../typography/Link';
 18 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 19 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 20 │ const actionContainerCss = "actionContainerCss-ajxc487";
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/banner/index.js 1:0-25
  × Module not found: Can't resolve './Banner' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/banner'
   ╭────
 1 │ export * from './Banner';
   ·               ──────────
   ╰────
  help: Did you mean './Banner.js'?
        
        The request './Banner' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/IconButton.js 11:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[11:19]
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { transparentVariants, variants } from '@coinbase/cds-common/tokens/button';
 11 │ import { cx } from '../cx';
    ·                    ───────
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { useResolveResponsiveProp } from '../hooks/useResolveResponsiveProp';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/IconButton.js 12:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[12:35]
 10 │ import { transparentVariants, variants } from '@coinbase/cds-common/tokens/button';
 11 │ import { cx } from '../cx';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 13 │ import { useResolveResponsiveProp } from '../hooks/useResolveResponsiveProp';
 14 │ import { useTheme } from '../hooks/useTheme';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/IconButton.js 13:0-77
  × Module not found: Can't resolve '../hooks/useResolveResponsiveProp' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[13:41]
 11 │ import { cx } from '../cx';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { useResolveResponsiveProp } from '../hooks/useResolveResponsiveProp';
    ·                                          ───────────────────────────────────
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { Icon } from '../icons/Icon';
    ╰────
  help: Did you mean '../hooks/useResolveResponsiveProp.js'?
        
        The request '../hooks/useResolveResponsiveProp' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/IconButton.js 14:0-45
  × Module not found: Can't resolve '../hooks/useTheme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[14:25]
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { useResolveResponsiveProp } from '../hooks/useResolveResponsiveProp';
 14 │ import { useTheme } from '../hooks/useTheme';
    ·                          ───────────────────
 15 │ import { Icon } from '../icons/Icon';
 16 │ import { Pressable } from '../system/Pressable';
    ╰────
  help: Did you mean '../hooks/useTheme.js'?
        
        The request '../hooks/useTheme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/IconButton.js 15:0-37
  × Module not found: Can't resolve '../icons/Icon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[15:21]
 13 │ import { useResolveResponsiveProp } from '../hooks/useResolveResponsiveProp';
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { Icon } from '../icons/Icon';
    ·                      ───────────────
 16 │ import { Pressable } from '../system/Pressable';
 17 │ import { ProgressCircle } from '../visualizations/ProgressCircle';
    ╰────
  help: Did you mean '../icons/Icon.js'?
        
        The request '../icons/Icon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/IconButton.js 16:0-48
  × Module not found: Can't resolve '../system/Pressable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[16:26]
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { Icon } from '../icons/Icon';
 16 │ import { Pressable } from '../system/Pressable';
    ·                           ─────────────────────
 17 │ import { ProgressCircle } from '../visualizations/ProgressCircle';
 18 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/Pressable.js'?
        
        The request '../system/Pressable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/IconButton.js 17:0-66
  × Module not found: Can't resolve '../visualizations/ProgressCircle' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[17:31]
 15 │ import { Icon } from '../icons/Icon';
 16 │ import { Pressable } from '../system/Pressable';
 17 │ import { ProgressCircle } from '../visualizations/ProgressCircle';
    ·                                ──────────────────────────────────
 18 │ import { jsx as _jsx } from "react/jsx-runtime";
 19 │ /**
    ╰────
  help: Did you mean '../visualizations/ProgressCircle.js'?
        
        The request '../visualizations/ProgressCircle' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/TileButton.js 13:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[13:35]
 11 │ import { pictogramScaleMultiplier } from '@coinbase/cds-common/tokens/tile';
 12 │ import { isDevelopment } from '@coinbase/cds-utils';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 14 │ import { Pictogram } from '../illustrations/Pictogram';
 15 │ import { Pressable } from '../system/Pressable';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/TileButton.js 14:0-55
  × Module not found: Can't resolve '../illustrations/Pictogram' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[14:26]
 12 │ import { isDevelopment } from '@coinbase/cds-utils';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Pictogram } from '../illustrations/Pictogram';
    ·                           ────────────────────────────
 15 │ import { Pressable } from '../system/Pressable';
 16 │ import { Tile } from './Tile';
    ╰────
  help: Did you mean '../illustrations/Pictogram.js'?
        
        The request '../illustrations/Pictogram' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/TileButton.js 15:0-48
  × Module not found: Can't resolve '../system/Pressable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[15:26]
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Pictogram } from '../illustrations/Pictogram';
 15 │ import { Pressable } from '../system/Pressable';
    ·                           ─────────────────────
 16 │ import { Tile } from './Tile';
 17 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/Pressable.js'?
        
        The request '../system/Pressable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/TileButton.js 16:0-30
  × Module not found: Can't resolve './Tile' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
    ╭─[16:21]
 14 │ import { Pictogram } from '../illustrations/Pictogram';
 15 │ import { Pressable } from '../system/Pressable';
 16 │ import { Tile } from './Tile';
    ·                      ────────
 17 │ import { jsx as _jsx } from "react/jsx-runtime";
 18 │ export const tileButtonDefaultElement = 'button';
    ╰────
  help: Did you mean './Tile.js'?
        
        The request './Tile' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/TileButton.js
  × ESModulesLinkingError: export 'isDevelopment' (imported as 'isDevelopment') was not found in '@coinbase/cds-utils' (module has no exports)
    ╭─[31:6]
 29 │     props = _objectWithoutProperties(mergedProps, _excluded);
 30 │   const Component = as !== null && as !== void 0 ? as : tileButtonDefaultElement;
 31 │   if (isDevelopment() && title.trim() === '') {
    ·       ─────────────
 32 │     console.warn('Setting an empty title in TileButton violates accessibility and CDS usage guidelines.');
 33 │   }
    ╰────
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/index.js 1:0-31
  × Module not found: Can't resolve './AvatarButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
   ╭─[1:14]
 1 │ export * from './AvatarButton';
   ·               ────────────────
 2 │ export * from './Button';
 3 │ export * from './ButtonGroup';
   ╰────
  help: Did you mean './AvatarButton.js'?
        
        The request './AvatarButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/index.js 2:0-25
  × Module not found: Can't resolve './Button' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
   ╭─[2:14]
 1 │ export * from './AvatarButton';
 2 │ export * from './Button';
   ·               ──────────
 3 │ export * from './ButtonGroup';
 4 │ export * from './IconButton';
   ╰────
  help: Did you mean './Button.js'?
        
        The request './Button' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/index.js 3:0-30
  × Module not found: Can't resolve './ButtonGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
   ╭─[3:14]
 1 │ export * from './AvatarButton';
 2 │ export * from './Button';
 3 │ export * from './ButtonGroup';
   ·               ───────────────
 4 │ export * from './IconButton';
 5 │ export * from './IconCounterButton';
   ╰────
  help: Did you mean './ButtonGroup.js'?
        
        The request './ButtonGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/index.js 4:0-29
  × Module not found: Can't resolve './IconButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
   ╭─[4:14]
 2 │ export * from './Button';
 3 │ export * from './ButtonGroup';
 4 │ export * from './IconButton';
   ·               ──────────────
 5 │ export * from './IconCounterButton';
 6 │ export * from './TileButton';
   ╰────
  help: Did you mean './IconButton.js'?
        
        The request './IconButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/index.js 5:0-36
  × Module not found: Can't resolve './IconCounterButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
   ╭─[5:14]
 3 │ export * from './ButtonGroup';
 4 │ export * from './IconButton';
 5 │ export * from './IconCounterButton';
   ·               ─────────────────────
 6 │ export * from './TileButton';
   ╰────
  help: Did you mean './IconCounterButton.js'?
        
        The request './IconCounterButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/buttons/index.js 6:0-29
  × Module not found: Can't resolve './TileButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/buttons'
   ╭─[6:14]
 4 │ export * from './IconButton';
 5 │ export * from './IconCounterButton';
 6 │ export * from './TileButton';
   ·               ──────────────
   ╰────
  help: Did you mean './TileButton.js'?
        
        The request './TileButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContainedAssetCard.js 11:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[11:19]
  9 │ import React from 'react';
 10 │ import { opacityHovered, opacityPressed } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { cx } from '../cx';
    ·                    ───────
 12 │ import { Box } from '../layout/Box';
 13 │ import { HStack } from '../layout/HStack';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContainedAssetCard.js 12:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[12:20]
 10 │ import { opacityHovered, opacityPressed } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { cx } from '../cx';
 12 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 13 │ import { HStack } from '../layout/HStack';
 14 │ import { VStack } from '../layout/VStack';
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContainedAssetCard.js 13:0-42
  × Module not found: Can't resolve '../layout/HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[13:23]
 11 │ import { cx } from '../cx';
 12 │ import { Box } from '../layout/Box';
 13 │ import { HStack } from '../layout/HStack';
    ·                        ──────────────────
 14 │ import { VStack } from '../layout/VStack';
 15 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../layout/HStack.js'?
        
        The request '../layout/HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContainedAssetCard.js 14:0-42
  × Module not found: Can't resolve '../layout/VStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[14:23]
 12 │ import { Box } from '../layout/Box';
 13 │ import { HStack } from '../layout/HStack';
 14 │ import { VStack } from '../layout/VStack';
    ·                        ──────────────────
 15 │ import { Text } from '../typography/Text';
 16 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../layout/VStack.js'?
        
        The request '../layout/VStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContainedAssetCard.js 15:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[15:21]
 13 │ import { HStack } from '../layout/HStack';
 14 │ import { VStack } from '../layout/VStack';
 15 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 16 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 17 │ export const containedAssetCardHeight = 156;
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContentCard/index.js 1:0-30
  × Module not found: Can't resolve './ContentCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards/ContentCard'
   ╭─[1:14]
 1 │ export * from './ContentCard';
   ·               ───────────────
 2 │ export * from './ContentCardBody';
 3 │ export * from './ContentCardFooter';
   ╰────
  help: Did you mean './ContentCard.js'?
        
        The request './ContentCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContentCard/index.js 2:0-34
  × Module not found: Can't resolve './ContentCardBody' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards/ContentCard'
   ╭─[2:14]
 1 │ export * from './ContentCard';
 2 │ export * from './ContentCardBody';
   ·               ───────────────────
 3 │ export * from './ContentCardFooter';
 4 │ export * from './ContentCardHeader';
   ╰────
  help: Did you mean './ContentCardBody.js'?
        
        The request './ContentCardBody' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContentCard/index.js 3:0-36
  × Module not found: Can't resolve './ContentCardFooter' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards/ContentCard'
   ╭─[3:14]
 1 │ export * from './ContentCard';
 2 │ export * from './ContentCardBody';
 3 │ export * from './ContentCardFooter';
   ·               ─────────────────────
 4 │ export * from './ContentCardHeader';
   ╰────
  help: Did you mean './ContentCardFooter.js'?
        
        The request './ContentCardFooter' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/ContentCard/index.js 4:0-36
  × Module not found: Can't resolve './ContentCardHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards/ContentCard'
   ╭─[4:14]
 2 │ export * from './ContentCardBody';
 3 │ export * from './ContentCardFooter';
 4 │ export * from './ContentCardHeader';
   ·               ─────────────────────
   ╰────
  help: Did you mean './ContentCardHeader.js'?
        
        The request './ContentCardHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/FloatingAssetCard.js 11:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[11:19]
  9 │ import React from 'react';
 10 │ import { opacityHovered, opacityPressed } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { cx } from '../cx';
    ·                    ───────
 12 │ import { HStack } from '../layout/HStack';
 13 │ import { VStack } from '../layout/VStack';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/FloatingAssetCard.js 12:0-42
  × Module not found: Can't resolve '../layout/HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[12:23]
 10 │ import { opacityHovered, opacityPressed } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { cx } from '../cx';
 12 │ import { HStack } from '../layout/HStack';
    ·                        ──────────────────
 13 │ import { VStack } from '../layout/VStack';
 14 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../layout/HStack.js'?
        
        The request '../layout/HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/FloatingAssetCard.js 13:0-42
  × Module not found: Can't resolve '../layout/VStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[13:23]
 11 │ import { cx } from '../cx';
 12 │ import { HStack } from '../layout/HStack';
 13 │ import { VStack } from '../layout/VStack';
    ·                        ──────────────────
 14 │ import { Text } from '../typography/Text';
 15 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../layout/VStack.js'?
        
        The request '../layout/VStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/FloatingAssetCard.js 14:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[14:21]
 12 │ import { HStack } from '../layout/HStack';
 13 │ import { VStack } from '../layout/VStack';
 14 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 15 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 16 │ export const floatingAssetCardLargeWidth = 359;
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 11:0-51
  × Module not found: Can't resolve '../buttons/IconButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[11:27]
  9 │ import React from 'react';
 10 │ import { opacityHovered, opacityPressed } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { IconButton } from '../buttons/IconButton';
    ·                            ───────────────────────
 12 │ import { cx } from '../cx';
 13 │ import { Pictogram } from '../illustrations/Pictogram';
    ╰────
  help: Did you mean '../buttons/IconButton.js'?
        
        The request '../buttons/IconButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 12:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[12:19]
 10 │ import { opacityHovered, opacityPressed } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { IconButton } from '../buttons/IconButton';
 12 │ import { cx } from '../cx';
    ·                    ───────
 13 │ import { Pictogram } from '../illustrations/Pictogram';
 14 │ import { Box } from '../layout/Box';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 13:0-55
  × Module not found: Can't resolve '../illustrations/Pictogram' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[13:26]
 11 │ import { IconButton } from '../buttons/IconButton';
 12 │ import { cx } from '../cx';
 13 │ import { Pictogram } from '../illustrations/Pictogram';
    ·                           ────────────────────────────
 14 │ import { Box } from '../layout/Box';
 15 │ import { HStack } from '../layout/HStack';
    ╰────
  help: Did you mean '../illustrations/Pictogram.js'?
        
        The request '../illustrations/Pictogram' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 14:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[14:20]
 12 │ import { cx } from '../cx';
 13 │ import { Pictogram } from '../illustrations/Pictogram';
 14 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 15 │ import { HStack } from '../layout/HStack';
 16 │ import { VStack } from '../layout/VStack';
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 15:0-42
  × Module not found: Can't resolve '../layout/HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[15:23]
 13 │ import { Pictogram } from '../illustrations/Pictogram';
 14 │ import { Box } from '../layout/Box';
 15 │ import { HStack } from '../layout/HStack';
    ·                        ──────────────────
 16 │ import { VStack } from '../layout/VStack';
 17 │ import { Pressable } from '../system';
    ╰────
  help: Did you mean '../layout/HStack.js'?
        
        The request '../layout/HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 16:0-42
  × Module not found: Can't resolve '../layout/VStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[16:23]
 14 │ import { Box } from '../layout/Box';
 15 │ import { HStack } from '../layout/HStack';
 16 │ import { VStack } from '../layout/VStack';
    ·                        ──────────────────
 17 │ import { Pressable } from '../system';
 18 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../layout/VStack.js'?
        
        The request '../layout/VStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 17:0-38
  × Module not found: Can't resolve '../system' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[17:26]
 15 │ import { HStack } from '../layout/HStack';
 16 │ import { VStack } from '../layout/VStack';
 17 │ import { Pressable } from '../system';
    ·                           ───────────
 18 │ import { Text } from '../typography/Text';
 19 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/index.js'?
        
        The request '../system' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/NudgeCard.js 18:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[18:21]
 16 │ import { VStack } from '../layout/VStack';
 17 │ import { Pressable } from '../system';
 18 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 19 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 20 │ const pressCss = "pressCss-p1667wdp";
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/UpsellCard.js 8:0-48
  × Module not found: Can't resolve '../buttons' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[8:35]
  6 │ import React, { isValidElement, memo } from 'react';
  7 │ import { upsellCardDefaultWidth, upsellCardMinHeight } from '@coinbase/cds-common/tokens/card';
  8 │ import { Button, IconButton } from '../buttons';
    ·                                    ────────────
  9 │ import { HStack, VStack } from '../layout';
 10 │ import { Pressable } from '../system';
    ╰────
  help: Did you mean '../buttons/index.js'?
        
        The request '../buttons' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/UpsellCard.js 9:0-43
  × Module not found: Can't resolve '../layout' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[9:31]
  7 │ import { upsellCardDefaultWidth, upsellCardMinHeight } from '@coinbase/cds-common/tokens/card';
  8 │ import { Button, IconButton } from '../buttons';
  9 │ import { HStack, VStack } from '../layout';
    ·                                ───────────
 10 │ import { Pressable } from '../system';
 11 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../layout/index.js'?
        
        The request '../layout' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/UpsellCard.js 10:0-38
  × Module not found: Can't resolve '../system' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[10:26]
  8 │ import { Button, IconButton } from '../buttons';
  9 │ import { HStack, VStack } from '../layout';
 10 │ import { Pressable } from '../system';
    ·                           ───────────
 11 │ import { Text } from '../typography/Text';
 12 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/index.js'?
        
        The request '../system' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/UpsellCard.js 11:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[11:21]
  9 │ import { HStack, VStack } from '../layout';
 10 │ import { Pressable } from '../system';
 11 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 12 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 13 │ /**
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 1:0-23
  × Module not found: Can't resolve './Card' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
   ╭─[1:14]
 1 │ export * from './Card';
   ·               ────────
 2 │ export * from './CardBody';
 3 │ export * from './CardFooter';
   ╰────
  help: Did you mean './Card.js'?
        
        The request './Card' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 2:0-27
  × Module not found: Can't resolve './CardBody' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
   ╭─[2:14]
 1 │ export * from './Card';
 2 │ export * from './CardBody';
   ·               ────────────
 3 │ export * from './CardFooter';
 4 │ export * from './CardGroup';
   ╰────
  help: Did you mean './CardBody.js'?
        
        The request './CardBody' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 3:0-29
  × Module not found: Can't resolve './CardFooter' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
   ╭─[3:14]
 1 │ export * from './Card';
 2 │ export * from './CardBody';
 3 │ export * from './CardFooter';
   ·               ──────────────
 4 │ export * from './CardGroup';
 5 │ export * from './CardHeader';
   ╰────
  help: Did you mean './CardFooter.js'?
        
        The request './CardFooter' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 4:0-28
  × Module not found: Can't resolve './CardGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
   ╭─[4:14]
 2 │ export * from './CardBody';
 3 │ export * from './CardFooter';
 4 │ export * from './CardGroup';
   ·               ─────────────
 5 │ export * from './CardHeader';
 6 │ export * from './CardMedia';
   ╰────
  help: Did you mean './CardGroup.js'?
        
        The request './CardGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 5:0-29
  × Module not found: Can't resolve './CardHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
   ╭─[5:14]
 3 │ export * from './CardFooter';
 4 │ export * from './CardGroup';
 5 │ export * from './CardHeader';
   ·               ──────────────
 6 │ export * from './CardMedia';
 7 │ export * from './CardRoot';
   ╰────
  help: Did you mean './CardHeader.js'?
        
        The request './CardHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 6:0-28
  × Module not found: Can't resolve './CardMedia' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
   ╭─[6:14]
 4 │ export * from './CardGroup';
 5 │ export * from './CardHeader';
 6 │ export * from './CardMedia';
   ·               ─────────────
 7 │ export * from './CardRoot';
 8 │ // Card variants
   ╰────
  help: Did you mean './CardMedia.js'?
        
        The request './CardMedia' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 7:0-27
  × Module not found: Can't resolve './CardRoot' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
   ╭─[7:14]
 5 │ export * from './CardHeader';
 6 │ export * from './CardMedia';
 7 │ export * from './CardRoot';
   ·               ────────────
 8 │ // Card variants
 9 │ export * from './AnnouncementCard';
   ╰────
  help: Did you mean './CardRoot.js'?
        
        The request './CardRoot' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 9:0-35
  × Module not found: Can't resolve './AnnouncementCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[9:14]
  7 │ export * from './CardRoot';
  8 │ // Card variants
  9 │ export * from './AnnouncementCard';
    ·               ────────────────────
 10 │ export * from './FeatureEntryCard';
 11 │ export * from './FeedCard';
    ╰────
  help: Did you mean './AnnouncementCard.js'?
        
        The request './AnnouncementCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 10:0-35
  × Module not found: Can't resolve './FeatureEntryCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[10:14]
  8 │ // Card variants
  9 │ export * from './AnnouncementCard';
 10 │ export * from './FeatureEntryCard';
    ·               ────────────────────
 11 │ export * from './FeedCard';
 12 │ // Gondolin cards
    ╰────
  help: Did you mean './FeatureEntryCard.js'?
        
        The request './FeatureEntryCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 11:0-27
  × Module not found: Can't resolve './FeedCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[11:14]
  9 │ export * from './AnnouncementCard';
 10 │ export * from './FeatureEntryCard';
 11 │ export * from './FeedCard';
    ·               ────────────
 12 │ // Gondolin cards
 13 │ export * from './ContainedAssetCard';
    ╰────
  help: Did you mean './FeedCard.js'?
        
        The request './FeedCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 13:0-37
  × Module not found: Can't resolve './ContainedAssetCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[13:14]
 11 │ export * from './FeedCard';
 12 │ // Gondolin cards
 13 │ export * from './ContainedAssetCard';
    ·               ──────────────────────
 14 │ export * from './FloatingAssetCard';
 15 │ export * from './NudgeCard';
    ╰────
  help: Did you mean './ContainedAssetCard.js'?
        
        The request './ContainedAssetCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 14:0-36
  × Module not found: Can't resolve './FloatingAssetCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[14:14]
 12 │ // Gondolin cards
 13 │ export * from './ContainedAssetCard';
 14 │ export * from './FloatingAssetCard';
    ·               ─────────────────────
 15 │ export * from './NudgeCard';
 16 │ export * from './UpsellCard';
    ╰────
  help: Did you mean './FloatingAssetCard.js'?
        
        The request './FloatingAssetCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 15:0-28
  × Module not found: Can't resolve './NudgeCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[15:14]
 13 │ export * from './ContainedAssetCard';
 14 │ export * from './FloatingAssetCard';
 15 │ export * from './NudgeCard';
    ·               ─────────────
 16 │ export * from './UpsellCard';
 17 │ // Phoenix cards
    ╰────
  help: Did you mean './NudgeCard.js'?
        
        The request './NudgeCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 16:0-29
  × Module not found: Can't resolve './UpsellCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[16:14]
 14 │ export * from './FloatingAssetCard';
 15 │ export * from './NudgeCard';
 16 │ export * from './UpsellCard';
    ·               ──────────────
 17 │ // Phoenix cards
 18 │ export * from './ContentCard';
    ╰────
  help: Did you mean './UpsellCard.js'?
        
        The request './UpsellCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 18:0-30
  × Module not found: Can't resolve './ContentCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[18:14]
 16 │ export * from './UpsellCard';
 17 │ // Phoenix cards
 18 │ export * from './ContentCard';
    ·               ───────────────
 19 │ // Media card
 20 │ export * from './MediaCard';
    ╰────
  help: Did you mean './ContentCard/index.js'?
        
        The request './ContentCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 20:0-28
  × Module not found: Can't resolve './MediaCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[20:14]
 18 │ export * from './ContentCard';
 19 │ // Media card
 20 │ export * from './MediaCard';
    ·               ─────────────
 21 │ // Messaging card
 22 │ export * from './MessagingCard';
    ╰────
  help: Did you mean './MediaCard/index.js'?
        
        The request './MediaCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cards/index.js 22:0-32
  × Module not found: Can't resolve './MessagingCard' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cards'
    ╭─[22:14]
 20 │ export * from './MediaCard';
 21 │ // Messaging card
 22 │ export * from './MessagingCard';
    ·               ─────────────────
    ╰────
  help: Did you mean './MessagingCard/index.js'?
        
        The request './MessagingCard' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/carousel/index.js 1:0-27
  × Module not found: Can't resolve './Carousel' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/carousel'
   ╭─[1:14]
 1 │ export * from './Carousel';
   ·               ────────────
 2 │ export * from './CarouselContext';
 3 │ export * from './CarouselItem';
   ╰────
  help: Did you mean './Carousel.js'?
        
        The request './Carousel' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/carousel/index.js 2:0-34
  × Module not found: Can't resolve './CarouselContext' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/carousel'
   ╭─[2:14]
 1 │ export * from './Carousel';
 2 │ export * from './CarouselContext';
   ·               ───────────────────
 3 │ export * from './CarouselItem';
 4 │ export * from './DefaultCarouselNavigation';
   ╰────
  help: Did you mean './CarouselContext.js'?
        
        The request './CarouselContext' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/carousel/index.js 3:0-31
  × Module not found: Can't resolve './CarouselItem' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/carousel'
   ╭─[3:14]
 1 │ export * from './Carousel';
 2 │ export * from './CarouselContext';
 3 │ export * from './CarouselItem';
   ·               ────────────────
 4 │ export * from './DefaultCarouselNavigation';
 5 │ export * from './DefaultCarouselPagination';
   ╰────
  help: Did you mean './CarouselItem.js'?
        
        The request './CarouselItem' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/carousel/index.js 4:0-44
  × Module not found: Can't resolve './DefaultCarouselNavigation' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/carousel'
   ╭─[4:14]
 2 │ export * from './CarouselContext';
 3 │ export * from './CarouselItem';
 4 │ export * from './DefaultCarouselNavigation';
   ·               ─────────────────────────────
 5 │ export * from './DefaultCarouselPagination';
   ╰────
  help: Did you mean './DefaultCarouselNavigation.js'?
        
        The request './DefaultCarouselNavigation' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/carousel/index.js 5:0-44
  × Module not found: Can't resolve './DefaultCarouselPagination' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/carousel'
   ╭─[5:14]
 3 │ export * from './CarouselItem';
 4 │ export * from './DefaultCarouselNavigation';
 5 │ export * from './DefaultCarouselPagination';
   ·               ─────────────────────────────
   ╰────
  help: Did you mean './DefaultCarouselPagination.js'?
        
        The request './DefaultCarouselPagination' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/CellHelperText.js 11:0-37
  × Module not found: Can't resolve '../icons/Icon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[11:21]
  9 │ import { forwardRef, memo } from 'react';
 10 │ import { cellHelperTextVariants } from '@coinbase/cds-common/tokens/cell';
 11 │ import { Icon } from '../icons/Icon';
    ·                      ───────────────
 12 │ import { Text } from '../typography/Text';
 13 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../icons/Icon.js'?
        
        The request '../icons/Icon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/CellHelperText.js 12:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[12:21]
 10 │ import { cellHelperTextVariants } from '@coinbase/cds-common/tokens/cell';
 11 │ import { Icon } from '../icons/Icon';
 12 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 13 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 14 │ export const CellHelperText = /*#__PURE__*/memo(/*#__PURE__*/forwardRef((_ref, ref) => {
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 11:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[11:19]
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { compactListHeight, listHeight } from '@coinbase/cds-common/tokens/cell';
 11 │ import { cx } from '../cx';
    ·                    ───────
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { Box } from '../layout/Box';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 12:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[12:35]
 10 │ import { compactListHeight, listHeight } from '@coinbase/cds-common/tokens/cell';
 11 │ import { cx } from '../cx';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 13 │ import { Box } from '../layout/Box';
 14 │ import { VStack } from '../layout/VStack';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 13:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[13:20]
 11 │ import { cx } from '../cx';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 14 │ import { VStack } from '../layout/VStack';
 15 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 14:0-42
  × Module not found: Can't resolve '../layout/VStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[14:23]
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { Box } from '../layout/Box';
 14 │ import { VStack } from '../layout/VStack';
    ·                        ──────────────────
 15 │ import { Text } from '../typography/Text';
 16 │ import { Cell } from './Cell';
    ╰────
  help: Did you mean '../layout/VStack.js'?
        
        The request '../layout/VStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 15:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[15:21]
 13 │ import { Box } from '../layout/Box';
 14 │ import { VStack } from '../layout/VStack';
 15 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 16 │ import { Cell } from './Cell';
 17 │ import { CellAccessory } from './CellAccessory';
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 16:0-30
  × Module not found: Can't resolve './Cell' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[16:21]
 14 │ import { VStack } from '../layout/VStack';
 15 │ import { Text } from '../typography/Text';
 16 │ import { Cell } from './Cell';
    ·                      ────────
 17 │ import { CellAccessory } from './CellAccessory';
 18 │ import { CellDetail } from './CellDetail';
    ╰────
  help: Did you mean './Cell.js'?
        
        The request './Cell' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 17:0-48
  × Module not found: Can't resolve './CellAccessory' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[17:30]
 15 │ import { Text } from '../typography/Text';
 16 │ import { Cell } from './Cell';
 17 │ import { CellAccessory } from './CellAccessory';
    ·                               ─────────────────
 18 │ import { CellDetail } from './CellDetail';
 19 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean './CellAccessory.js'?
        
        The request './CellAccessory' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/ListCell.js 18:0-42
  × Module not found: Can't resolve './CellDetail' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
    ╭─[18:27]
 16 │ import { Cell } from './Cell';
 17 │ import { CellAccessory } from './CellAccessory';
 18 │ import { CellDetail } from './CellDetail';
    ·                            ──────────────
 19 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 20 │ const COMPONENT_STATIC_CLASSNAME = 'cds-ListCell';
    ╰────
  help: Did you mean './CellDetail.js'?
        
        The request './CellDetail' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/index.js 1:0-33
  × Module not found: Can't resolve './CellHelperText' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
   ╭─[1:14]
 1 │ export * from './CellHelperText';
   ·               ──────────────────
 2 │ export * from './CellMedia';
 3 │ export * from './ContentCell';
   ╰────
  help: Did you mean './CellHelperText.js'?
        
        The request './CellHelperText' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/index.js 2:0-28
  × Module not found: Can't resolve './CellMedia' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
   ╭─[2:14]
 1 │ export * from './CellHelperText';
 2 │ export * from './CellMedia';
   ·               ─────────────
 3 │ export * from './ContentCell';
 4 │ export * from './ContentCellFallback';
   ╰────
  help: Did you mean './CellMedia.js'?
        
        The request './CellMedia' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/index.js 3:0-30
  × Module not found: Can't resolve './ContentCell' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
   ╭─[3:14]
 1 │ export * from './CellHelperText';
 2 │ export * from './CellMedia';
 3 │ export * from './ContentCell';
   ·               ───────────────
 4 │ export * from './ContentCellFallback';
 5 │ export * from './ListCell';
   ╰────
  help: Did you mean './ContentCell.js'?
        
        The request './ContentCell' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/index.js 4:0-38
  × Module not found: Can't resolve './ContentCellFallback' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
   ╭─[4:14]
 2 │ export * from './CellMedia';
 3 │ export * from './ContentCell';
 4 │ export * from './ContentCellFallback';
   ·               ───────────────────────
 5 │ export * from './ListCell';
 6 │ export * from './ListCellFallback';
   ╰────
  help: Did you mean './ContentCellFallback.js'?
        
        The request './ContentCellFallback' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/index.js 5:0-27
  × Module not found: Can't resolve './ListCell' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
   ╭─[5:14]
 3 │ export * from './ContentCell';
 4 │ export * from './ContentCellFallback';
 5 │ export * from './ListCell';
   ·               ────────────
 6 │ export * from './ListCellFallback';
   ╰────
  help: Did you mean './ListCell.js'?
        
        The request './ListCell' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/cells/index.js 6:0-35
  × Module not found: Can't resolve './ListCellFallback' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/cells'
   ╭─[6:14]
 4 │ export * from './ContentCellFallback';
 5 │ export * from './ListCell';
 6 │ export * from './ListCellFallback';
   ·               ────────────────────
   ╰────
  help: Did you mean './ListCellFallback.js'?
        
        The request './ListCellFallback' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/Chip.js 12:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[12:19]
 10 │ import { curves, durations } from '@coinbase/cds-common/motion/tokens';
 11 │ import { chipMaxWidth } from '@coinbase/cds-common/tokens/chip';
 12 │ import { cx } from '../cx';
    ·                    ───────
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Box, HStack } from '../layout';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/Chip.js 13:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[13:35]
 11 │ import { chipMaxWidth } from '@coinbase/cds-common/tokens/chip';
 12 │ import { cx } from '../cx';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 14 │ import { Box, HStack } from '../layout';
 15 │ import { InvertedThemeProvider, Pressable } from '../system';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/Chip.js 14:0-40
  × Module not found: Can't resolve '../layout' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[14:28]
 12 │ import { cx } from '../cx';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Box, HStack } from '../layout';
    ·                             ───────────
 15 │ import { InvertedThemeProvider, Pressable } from '../system';
 16 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../layout/index.js'?
        
        The request '../layout' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/Chip.js 15:0-61
  × Module not found: Can't resolve '../system' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[15:49]
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { Box, HStack } from '../layout';
 15 │ import { InvertedThemeProvider, Pressable } from '../system';
    ·                                                  ───────────
 16 │ import { Text } from '../typography/Text';
 17 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/index.js'?
        
        The request '../system' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/Chip.js 16:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[16:21]
 14 │ import { Box, HStack } from '../layout';
 15 │ import { InvertedThemeProvider, Pressable } from '../system';
 16 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 17 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 18 │ const transitionCss = "transitionCss-thdcix9";
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/SelectChip.js 11:0-66
  × Module not found: Can't resolve '../controls/useRefocusTrigger' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[11:34]
  9 │ import React, { forwardRef, memo, useCallback, useState } from 'react';
 10 │ import { useMergeRefs } from '@coinbase/cds-common/hooks/useMergeRefs';
 11 │ import { useRefocusTrigger } from '../controls/useRefocusTrigger';
    ·                                   ───────────────────────────────
 12 │ import { Dropdown } from '../dropdown';
 13 │ import { AnimatedCaret } from '../motion/AnimatedCaret';
    ╰────
  help: Did you mean '../controls/useRefocusTrigger.js'?
        
        The request '../controls/useRefocusTrigger' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/SelectChip.js 12:0-39
  × Module not found: Can't resolve '../dropdown' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[12:25]
 10 │ import { useMergeRefs } from '@coinbase/cds-common/hooks/useMergeRefs';
 11 │ import { useRefocusTrigger } from '../controls/useRefocusTrigger';
 12 │ import { Dropdown } from '../dropdown';
    ·                          ─────────────
 13 │ import { AnimatedCaret } from '../motion/AnimatedCaret';
 14 │ import { MediaChip } from './MediaChip';
    ╰────
  help: Did you mean '../dropdown/index.js'?
        
        The request '../dropdown' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/SelectChip.js 13:0-56
  × Module not found: Can't resolve '../motion/AnimatedCaret' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[13:30]
 11 │ import { useRefocusTrigger } from '../controls/useRefocusTrigger';
 12 │ import { Dropdown } from '../dropdown';
 13 │ import { AnimatedCaret } from '../motion/AnimatedCaret';
    ·                               ─────────────────────────
 14 │ import { MediaChip } from './MediaChip';
 15 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../motion/AnimatedCaret.js'?
        
        The request '../motion/AnimatedCaret' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/SelectChip.js 14:0-40
  × Module not found: Can't resolve './MediaChip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[14:26]
 12 │ import { Dropdown } from '../dropdown';
 13 │ import { AnimatedCaret } from '../motion/AnimatedCaret';
 14 │ import { MediaChip } from './MediaChip';
    ·                           ─────────────
 15 │ import { jsx as _jsx } from "react/jsx-runtime";
 16 │ export const SELECT_CHIP_DEFAULT_TEST_ID = 'select-chip';
    ╰────
  help: Did you mean './MediaChip.js'?
        
        The request './MediaChip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/SelectChip.js
  × ESModulesLinkingError: export 'useMergeRefs' (imported as 'useMergeRefs') was not found in '@coinbase/cds-common/hooks/useMergeRefs' (module has no exports)
    ╭─[61:21]
 59 │   const [menuHasClosed, setMenuHasClosed] = useState(false);
 60 │   const triggerRef = useRefocusTrigger(menuHasClosed);
 61 │   const mergedRefs = useMergeRefs(ref, triggerRef);
    ·                      ────────────
 62 │   const handleOpenMenu = useCallback(() => {
 63 │     setIsOpen(true);
    ╰────
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/TabbedChips.js 12:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[12:35]
 10 │ import React, { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
 11 │ import { useTabsContext } from '@coinbase/cds-common/tabs/TabsContext';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 13 │ import { useHorizontalScrollToTarget } from '../hooks/useHorizontalScrollToTarget';
 14 │ import { HStack } from '../layout';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/TabbedChips.js 13:0-83
  × Module not found: Can't resolve '../hooks/useHorizontalScrollToTarget' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[13:44]
 11 │ import { useTabsContext } from '@coinbase/cds-common/tabs/TabsContext';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { useHorizontalScrollToTarget } from '../hooks/useHorizontalScrollToTarget';
    ·                                             ──────────────────────────────────────
 14 │ import { HStack } from '../layout';
 15 │ import { Paddle, Tabs } from '../tabs';
    ╰────
  help: Did you mean '../hooks/useHorizontalScrollToTarget.js'?
        
        The request '../hooks/useHorizontalScrollToTarget' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/TabbedChips.js 14:0-35
  × Module not found: Can't resolve '../layout' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[14:23]
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { useHorizontalScrollToTarget } from '../hooks/useHorizontalScrollToTarget';
 14 │ import { HStack } from '../layout';
    ·                        ───────────
 15 │ import { Paddle, Tabs } from '../tabs';
 16 │ import { MediaChip } from './MediaChip';
    ╰────
  help: Did you mean '../layout/index.js'?
        
        The request '../layout' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/TabbedChips.js 15:0-39
  × Module not found: Can't resolve '../tabs' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[15:29]
 13 │ import { useHorizontalScrollToTarget } from '../hooks/useHorizontalScrollToTarget';
 14 │ import { HStack } from '../layout';
 15 │ import { Paddle, Tabs } from '../tabs';
    ·                              ─────────
 16 │ import { MediaChip } from './MediaChip';
 17 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../tabs/index.js'?
        
        The request '../tabs' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/TabbedChips.js 16:0-40
  × Module not found: Can't resolve './MediaChip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
    ╭─[16:26]
 14 │ import { HStack } from '../layout';
 15 │ import { Paddle, Tabs } from '../tabs';
 16 │ import { MediaChip } from './MediaChip';
    ·                           ─────────────
 17 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 18 │ const scrollContainerCss = "scrollContainerCss-s19l7spv";
    ╰────
  help: Did you mean './MediaChip.js'?
        
        The request './MediaChip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/index.js 1:0-23
  × Module not found: Can't resolve './Chip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
   ╭─[1:14]
 1 │ export * from './Chip';
   ·               ────────
 2 │ export * from './ChipProps';
 3 │ export * from './InputChip';
   ╰────
  help: Did you mean './Chip.js'?
        
        The request './Chip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/index.js 2:0-28
  × Module not found: Can't resolve './ChipProps' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
   ╭─[2:14]
 1 │ export * from './Chip';
 2 │ export * from './ChipProps';
   ·               ─────────────
 3 │ export * from './InputChip';
 4 │ export * from './MediaChip';
   ╰────
  help: Did you mean './ChipProps.js'?
        
        The request './ChipProps' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/index.js 3:0-28
  × Module not found: Can't resolve './InputChip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
   ╭─[3:14]
 1 │ export * from './Chip';
 2 │ export * from './ChipProps';
 3 │ export * from './InputChip';
   ·               ─────────────
 4 │ export * from './MediaChip';
 5 │ export * from './SelectChip';
   ╰────
  help: Did you mean './InputChip.js'?
        
        The request './InputChip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/index.js 4:0-28
  × Module not found: Can't resolve './MediaChip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
   ╭─[4:14]
 2 │ export * from './ChipProps';
 3 │ export * from './InputChip';
 4 │ export * from './MediaChip';
   ·               ─────────────
 5 │ export * from './SelectChip';
 6 │ export * from './TabbedChips';
   ╰────
  help: Did you mean './MediaChip.js'?
        
        The request './MediaChip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/index.js 5:0-29
  × Module not found: Can't resolve './SelectChip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
   ╭─[5:14]
 3 │ export * from './InputChip';
 4 │ export * from './MediaChip';
 5 │ export * from './SelectChip';
   ·               ──────────────
 6 │ export * from './TabbedChips';
   ╰────
  help: Did you mean './SelectChip.js'?
        
        The request './SelectChip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/chips/index.js 6:0-30
  × Module not found: Can't resolve './TabbedChips' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/chips'
   ╭─[6:14]
 4 │ export * from './MediaChip';
 5 │ export * from './SelectChip';
 6 │ export * from './TabbedChips';
   ·               ───────────────
   ╰────
  help: Did you mean './TabbedChips.js'?
        
        The request './TabbedChips' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/coachmark/index.js 1:0-28
  × Module not found: Can't resolve './Coachmark' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/coachmark'
   ╭────
 1 │ export * from './Coachmark';
   ·               ─────────────
   ╰────
  help: Did you mean './Coachmark.js'?
        
        The request './Coachmark' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/collapsible/Collapsible.js 11:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/collapsible'
    ╭─[11:35]
  9 │ import React, { forwardRef, memo, useCallback, useMemo, useState } from 'react';
 10 │ import { m as motion } from 'framer-motion';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 12 │ import { Box } from '../layout/Box';
 13 │ import { useCollapsibleMotionProps } from './useCollapsibleMotionProps';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/collapsible/Collapsible.js 12:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/collapsible'
    ╭─[12:20]
 10 │ import { m as motion } from 'framer-motion';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 13 │ import { useCollapsibleMotionProps } from './useCollapsibleMotionProps';
 14 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/collapsible/Collapsible.js 13:0-72
  × Module not found: Can't resolve './useCollapsibleMotionProps' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/collapsible'
    ╭─[13:42]
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { Box } from '../layout/Box';
 13 │ import { useCollapsibleMotionProps } from './useCollapsibleMotionProps';
    ·                                           ─────────────────────────────
 14 │ import { jsx as _jsx } from "react/jsx-runtime";
 15 │ const COMPONENT_STATIC_CLASSNAME = 'cds-Collapsible';
    ╰────
  help: Did you mean './useCollapsibleMotionProps.js'?
        
        The request './useCollapsibleMotionProps' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/collapsible/index.js 1:0-30
  × Module not found: Can't resolve './Collapsible' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/collapsible'
   ╭────
 1 │ export * from './Collapsible';
   ·               ───────────────
   ╰────
  help: Did you mean './Collapsible.js'?
        
        The request './Collapsible' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/InputLabel.js 10:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[10:21]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { memo } from 'react';
 10 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 11 │ import { jsx as _jsx } from "react/jsx-runtime";
 12 │ export const InputLabel = /*#__PURE__*/memo(function InputLabel(_ref) {
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/SearchInput.js 11:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[11:35]
  9 │ import React, { forwardRef, memo, useCallback, useMemo, useRef } from 'react';
 10 │ import { useMergeRefs } from '@coinbase/cds-common/hooks/useMergeRefs';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 12 │ import { Box } from '../layout/Box';
 13 │ import { InputIcon } from './InputIcon';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/SearchInput.js 12:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[12:20]
 10 │ import { useMergeRefs } from '@coinbase/cds-common/hooks/useMergeRefs';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 13 │ import { InputIcon } from './InputIcon';
 14 │ import { InputIconButton } from './InputIconButton';
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/SearchInput.js 13:0-40
  × Module not found: Can't resolve './InputIcon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[13:26]
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { Box } from '../layout/Box';
 13 │ import { InputIcon } from './InputIcon';
    ·                           ─────────────
 14 │ import { InputIconButton } from './InputIconButton';
 15 │ import { TextInput } from './TextInput';
    ╰────
  help: Did you mean './InputIcon.js'?
        
        The request './InputIcon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/SearchInput.js 14:0-52
  × Module not found: Can't resolve './InputIconButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[14:32]
 12 │ import { Box } from '../layout/Box';
 13 │ import { InputIcon } from './InputIcon';
 14 │ import { InputIconButton } from './InputIconButton';
    ·                                 ───────────────────
 15 │ import { TextInput } from './TextInput';
 16 │ 
    ╰────
  help: Did you mean './InputIconButton.js'?
        
        The request './InputIconButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/SearchInput.js 15:0-40
  × Module not found: Can't resolve './TextInput' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[15:26]
 13 │ import { InputIcon } from './InputIcon';
 14 │ import { InputIconButton } from './InputIconButton';
 15 │ import { TextInput } from './TextInput';
    ·                           ─────────────
 16 │ 
 17 │ /**
    ╰────
  help: Did you mean './TextInput.js'?
        
        The request './TextInput' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/SearchInput.js
  × ESModulesLinkingError: export 'useMergeRefs' (imported as 'useMergeRefs') was not found in '@coinbase/cds-common/hooks/useMergeRefs' (module has no exports)
    ╭─[47:15]
 45 │     props = _objectWithoutProperties(mergedProps, _excluded);
 46 │   const internalRef = useRef(null);
 47 │   const refs = useMergeRefs(ref, internalRef);
    ·                ────────────
 48 │   const handleOnChange = useCallback(e => {
 49 │     onChange === null || onChange === void 0 || onChange(e);
    ╰────
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/Select.js 13:0-48
  × Module not found: Can't resolve '../dropdown/Dropdown' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[13:25]
 11 │ import { useMergeRefs } from '@coinbase/cds-common/hooks/useMergeRefs';
 12 │ import { helperTextHeight, inputStackGap } from '@coinbase/cds-common/tokens/input';
 13 │ import { Dropdown } from '../dropdown/Dropdown';
    ·                          ──────────────────────
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { HStack } from '../layout/HStack';
    ╰────
  help: Did you mean '../dropdown/Dropdown.js'?
        
        The request '../dropdown/Dropdown' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/Select.js 14:0-45
  × Module not found: Can't resolve '../hooks/useTheme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[14:25]
 12 │ import { helperTextHeight, inputStackGap } from '@coinbase/cds-common/tokens/input';
 13 │ import { Dropdown } from '../dropdown/Dropdown';
 14 │ import { useTheme } from '../hooks/useTheme';
    ·                          ───────────────────
 15 │ import { HStack } from '../layout/HStack';
 16 │ import { TextInputFocusVariantContext } from './context';
    ╰────
  help: Did you mean '../hooks/useTheme.js'?
        
        The request '../hooks/useTheme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/Select.js 15:0-42
  × Module not found: Can't resolve '../layout/HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[15:23]
 13 │ import { Dropdown } from '../dropdown/Dropdown';
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { HStack } from '../layout/HStack';
    ·                        ──────────────────
 16 │ import { TextInputFocusVariantContext } from './context';
 17 │ import { SelectTrigger } from './SelectTrigger';
    ╰────
  help: Did you mean '../layout/HStack.js'?
        
        The request '../layout/HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/Select.js 16:0-57
  × Module not found: Can't resolve './context' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[16:45]
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { HStack } from '../layout/HStack';
 16 │ import { TextInputFocusVariantContext } from './context';
    ·                                              ───────────
 17 │ import { SelectTrigger } from './SelectTrigger';
 18 │ import { useRefocusTrigger } from './useRefocusTrigger';
    ╰────
  help: Did you mean './context.js'?
        
        The request './context' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/Select.js 17:0-48
  × Module not found: Can't resolve './SelectTrigger' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[17:30]
 15 │ import { HStack } from '../layout/HStack';
 16 │ import { TextInputFocusVariantContext } from './context';
 17 │ import { SelectTrigger } from './SelectTrigger';
    ·                               ─────────────────
 18 │ import { useRefocusTrigger } from './useRefocusTrigger';
 19 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean './SelectTrigger.js'?
        
        The request './SelectTrigger' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/Select.js 18:0-56
  × Module not found: Can't resolve './useRefocusTrigger' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[18:34]
 16 │ import { TextInputFocusVariantContext } from './context';
 17 │ import { SelectTrigger } from './SelectTrigger';
 18 │ import { useRefocusTrigger } from './useRefocusTrigger';
    ·                                   ─────────────────────
 19 │ import { jsx as _jsx } from "react/jsx-runtime";
 20 │ /**
    ╰────
  help: Did you mean './useRefocusTrigger.js'?
        
        The request './useRefocusTrigger' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/Select.js
  × ESModulesLinkingError: export 'useMergeRefs' (imported as 'useMergeRefs') was not found in '@coinbase/cds-common/hooks/useMergeRefs' (module has no exports)
    ╭─[64:15]
 62 │     setMenuHasClosed(true);
 63 │   }, []);
 64 │   const refs = useMergeRefs(ref, triggerRef);
    ·                ────────────
 65 │   const trigger = useMemo(() => /*#__PURE__*/_jsx(TextInputFocusVariantContext.Provider, {
 66 │     value: focusedVariant,
    ╰────
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 1:0-27
  × Module not found: Can't resolve './Checkbox' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
   ╭─[1:14]
 1 │ export * from './Checkbox';
   ·               ────────────
 2 │ export * from './CheckboxCell';
 3 │ export * from './CheckboxGroup';
   ╰────
  help: Did you mean './Checkbox.js'?
        
        The request './Checkbox' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 2:0-31
  × Module not found: Can't resolve './CheckboxCell' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
   ╭─[2:14]
 1 │ export * from './Checkbox';
 2 │ export * from './CheckboxCell';
   ·               ────────────────
 3 │ export * from './CheckboxGroup';
 4 │ export * from './ControlGroup';
   ╰────
  help: Did you mean './CheckboxCell.js'?
        
        The request './CheckboxCell' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 3:0-32
  × Module not found: Can't resolve './CheckboxGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
   ╭─[3:14]
 1 │ export * from './Checkbox';
 2 │ export * from './CheckboxCell';
 3 │ export * from './CheckboxGroup';
   ·               ─────────────────
 4 │ export * from './ControlGroup';
 5 │ export * from './InputIcon';
   ╰────
  help: Did you mean './CheckboxGroup.js'?
        
        The request './CheckboxGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 4:0-31
  × Module not found: Can't resolve './ControlGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
   ╭─[4:14]
 2 │ export * from './CheckboxCell';
 3 │ export * from './CheckboxGroup';
 4 │ export * from './ControlGroup';
   ·               ────────────────
 5 │ export * from './InputIcon';
 6 │ export * from './InputIconButton';
   ╰────
  help: Did you mean './ControlGroup.js'?
        
        The request './ControlGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 5:0-28
  × Module not found: Can't resolve './InputIcon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
   ╭─[5:14]
 3 │ export * from './CheckboxGroup';
 4 │ export * from './ControlGroup';
 5 │ export * from './InputIcon';
   ·               ─────────────
 6 │ export * from './InputIconButton';
 7 │ export * from './NativeTextArea';
   ╰────
  help: Did you mean './InputIcon.js'?
        
        The request './InputIcon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 6:0-34
  × Module not found: Can't resolve './InputIconButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
   ╭─[6:14]
 4 │ export * from './ControlGroup';
 5 │ export * from './InputIcon';
 6 │ export * from './InputIconButton';
   ·               ───────────────────
 7 │ export * from './NativeTextArea';
 8 │ export * from './RadioCell';
   ╰────
  help: Did you mean './InputIconButton.js'?
        
        The request './InputIconButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 7:0-33
  × Module not found: Can't resolve './NativeTextArea' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
   ╭─[7:14]
 5 │ export * from './InputIcon';
 6 │ export * from './InputIconButton';
 7 │ export * from './NativeTextArea';
   ·               ──────────────────
 8 │ export * from './RadioCell';
 9 │ export * from './RadioGroup';
   ╰────
  help: Did you mean './NativeTextArea.js'?
        
        The request './NativeTextArea' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 8:0-28
  × Module not found: Can't resolve './RadioCell' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[8:14]
  6 │ export * from './InputIconButton';
  7 │ export * from './NativeTextArea';
  8 │ export * from './RadioCell';
    ·               ─────────────
  9 │ export * from './RadioGroup';
 10 │ export * from './SearchInput';
    ╰────
  help: Did you mean './RadioCell.js'?
        
        The request './RadioCell' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 9:0-29
  × Module not found: Can't resolve './RadioGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[9:14]
  7 │ export * from './NativeTextArea';
  8 │ export * from './RadioCell';
  9 │ export * from './RadioGroup';
    ·               ──────────────
 10 │ export * from './SearchInput';
 11 │ export * from './SegmentedControl';
    ╰────
  help: Did you mean './RadioGroup.js'?
        
        The request './RadioGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 10:0-30
  × Module not found: Can't resolve './SearchInput' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[10:14]
  8 │ export * from './RadioCell';
  9 │ export * from './RadioGroup';
 10 │ export * from './SearchInput';
    ·               ───────────────
 11 │ export * from './SegmentedControl';
 12 │ export * from './Select';
    ╰────
  help: Did you mean './SearchInput.js'?
        
        The request './SearchInput' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 11:0-35
  × Module not found: Can't resolve './SegmentedControl' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[11:14]
  9 │ export * from './RadioGroup';
 10 │ export * from './SearchInput';
 11 │ export * from './SegmentedControl';
    ·               ────────────────────
 12 │ export * from './Select';
 13 │ export * from './SelectOption';
    ╰────
  help: Did you mean './SegmentedControl.js'?
        
        The request './SegmentedControl' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 12:0-25
  × Module not found: Can't resolve './Select' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[12:14]
 10 │ export * from './SearchInput';
 11 │ export * from './SegmentedControl';
 12 │ export * from './Select';
    ·               ──────────
 13 │ export * from './SelectOption';
 14 │ export * from './Switch';
    ╰────
  help: Did you mean './Select.js'?
        
        The request './Select' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 13:0-31
  × Module not found: Can't resolve './SelectOption' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[13:14]
 11 │ export * from './SegmentedControl';
 12 │ export * from './Select';
 13 │ export * from './SelectOption';
    ·               ────────────────
 14 │ export * from './Switch';
 15 │ export * from './TextInput';
    ╰────
  help: Did you mean './SelectOption.js'?
        
        The request './SelectOption' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 14:0-25
  × Module not found: Can't resolve './Switch' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[14:14]
 12 │ export * from './Select';
 13 │ export * from './SelectOption';
 14 │ export * from './Switch';
    ·               ──────────
 15 │ export * from './TextInput';
    ╰────
  help: Did you mean './Switch.js'?
        
        The request './Switch' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/controls/index.js 15:0-28
  × Module not found: Can't resolve './TextInput' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/controls'
    ╭─[15:14]
 13 │ export * from './SelectOption';
 14 │ export * from './Switch';
 15 │ export * from './TextInput';
    ·               ─────────────
    ╰────
  help: Did you mean './TextInput.js'?
        
        The request './TextInput' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/core/createThemeCssVars.js 1:0-43
  × Module not found: Can't resolve './theme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/core'
   ╭─[1:33]
 1 │ import { styleVarPrefixes } from './theme';
   ·                                  ─────────
 2 │ const periodsRegex = /\./g;
 3 │ 
   ╰────
  help: Did you mean './theme.js'?
        
        The request './theme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 17:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[17:19]
 15 │ import { useLocale } from '@coinbase/cds-common/system/LocaleProvider';
 16 │ import { accessibleOpacityDisabled } from '@coinbase/cds-common/tokens/interactable';
 17 │ import { cx } from '../cx';
    ·                    ───────
 18 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 19 │ import { Icon } from '../icons/Icon';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 18:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[18:35]
 16 │ import { accessibleOpacityDisabled } from '@coinbase/cds-common/tokens/interactable';
 17 │ import { cx } from '../cx';
 18 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 19 │ import { Icon } from '../icons/Icon';
 20 │ import { Grid } from '../layout/Grid';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 19:0-37
  × Module not found: Can't resolve '../icons/Icon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[19:21]
 17 │ import { cx } from '../cx';
 18 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 19 │ import { Icon } from '../icons/Icon';
    ·                      ───────────────
 20 │ import { Grid } from '../layout/Grid';
 21 │ import { HStack } from '../layout/HStack';
    ╰────
  help: Did you mean '../icons/Icon.js'?
        
        The request '../icons/Icon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 20:0-38
  × Module not found: Can't resolve '../layout/Grid' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[20:21]
 18 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 19 │ import { Icon } from '../icons/Icon';
 20 │ import { Grid } from '../layout/Grid';
    ·                      ────────────────
 21 │ import { HStack } from '../layout/HStack';
 22 │ import { VStack } from '../layout/VStack';
    ╰────
  help: Did you mean '../layout/Grid.js'?
        
        The request '../layout/Grid' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 21:0-42
  × Module not found: Can't resolve '../layout/HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[21:23]
 19 │ import { Icon } from '../icons/Icon';
 20 │ import { Grid } from '../layout/Grid';
 21 │ import { HStack } from '../layout/HStack';
    ·                        ──────────────────
 22 │ import { VStack } from '../layout/VStack';
 23 │ import { Tooltip } from '../overlays/tooltip/Tooltip';
    ╰────
  help: Did you mean '../layout/HStack.js'?
        
        The request '../layout/HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 22:0-42
  × Module not found: Can't resolve '../layout/VStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[22:23]
 20 │ import { Grid } from '../layout/Grid';
 21 │ import { HStack } from '../layout/HStack';
 22 │ import { VStack } from '../layout/VStack';
    ·                        ──────────────────
 23 │ import { Tooltip } from '../overlays/tooltip/Tooltip';
 24 │ import { Pressable } from '../system/Pressable';
    ╰────
  help: Did you mean '../layout/VStack.js'?
        
        The request '../layout/VStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 23:0-54
  × Module not found: Can't resolve '../overlays/tooltip/Tooltip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[23:24]
 21 │ import { HStack } from '../layout/HStack';
 22 │ import { VStack } from '../layout/VStack';
 23 │ import { Tooltip } from '../overlays/tooltip/Tooltip';
    ·                         ─────────────────────────────
 24 │ import { Pressable } from '../system/Pressable';
 25 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../overlays/tooltip/Tooltip.js'?
        
        The request '../overlays/tooltip/Tooltip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 24:0-48
  × Module not found: Can't resolve '../system/Pressable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[24:26]
 22 │ import { VStack } from '../layout/VStack';
 23 │ import { Tooltip } from '../overlays/tooltip/Tooltip';
 24 │ import { Pressable } from '../system/Pressable';
    ·                           ─────────────────────
 25 │ import { Text } from '../typography/Text';
 26 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/Pressable.js'?
        
        The request '../system/Pressable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/Calendar.js 25:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
    ╭─[25:21]
 23 │ import { Tooltip } from '../overlays/tooltip/Tooltip';
 24 │ import { Pressable } from '../system/Pressable';
 25 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 26 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 27 │ const CALENDAR_DAY_DIMENSION = 40;
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/index.js 1:0-27
  × Module not found: Can't resolve './Calendar' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
   ╭─[1:14]
 1 │ export * from './Calendar';
   ·               ────────────
 2 │ export * from './DateInput';
 3 │ export * from './DatePicker';
   ╰────
  help: Did you mean './Calendar.js'?
        
        The request './Calendar' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/index.js 2:0-28
  × Module not found: Can't resolve './DateInput' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
   ╭─[2:14]
 1 │ export * from './Calendar';
 2 │ export * from './DateInput';
   ·               ─────────────
 3 │ export * from './DatePicker';
   ╰────
  help: Did you mean './DateInput.js'?
        
        The request './DateInput' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dates/index.js 3:0-29
  × Module not found: Can't resolve './DatePicker' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dates'
   ╭─[3:14]
 1 │ export * from './Calendar';
 2 │ export * from './DateInput';
 3 │ export * from './DatePicker';
   ·               ──────────────
   ╰────
  help: Did you mean './DatePicker.js'?
        
        The request './DatePicker' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dots/index.js 1:0-27
  × Module not found: Can't resolve './DotCount' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dots'
   ╭─[1:14]
 1 │ export * from './DotCount';
   ·               ────────────
 2 │ export * from './DotStatusColor';
 3 │ export * from './DotSymbol';
   ╰────
  help: Did you mean './DotCount.js'?
        
        The request './DotCount' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dots/index.js 2:0-33
  × Module not found: Can't resolve './DotStatusColor' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dots'
   ╭─[2:14]
 1 │ export * from './DotCount';
 2 │ export * from './DotStatusColor';
   ·               ──────────────────
 3 │ export * from './DotSymbol';
   ╰────
  help: Did you mean './DotStatusColor.js'?
        
        The request './DotStatusColor' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dots/index.js 3:0-28
  × Module not found: Can't resolve './DotSymbol' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dots'
   ╭─[3:14]
 1 │ export * from './DotCount';
 2 │ export * from './DotStatusColor';
 3 │ export * from './DotSymbol';
   ·               ─────────────
   ╰────
  help: Did you mean './DotSymbol.js'?
        
        The request './DotSymbol' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dropdown/index.js 1:0-27
  × Module not found: Can't resolve './Dropdown' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dropdown'
   ╭─[1:14]
 1 │ export * from './Dropdown';
   ·               ────────────
 2 │ export * from './DropdownProps';
 3 │ export * from './MenuItem';
   ╰────
  help: Did you mean './Dropdown.js'?
        
        The request './Dropdown' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dropdown/index.js 2:0-32
  × Module not found: Can't resolve './DropdownProps' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dropdown'
   ╭─[2:14]
 1 │ export * from './Dropdown';
 2 │ export * from './DropdownProps';
   ·               ─────────────────
 3 │ export * from './MenuItem';
   ╰────
  help: Did you mean './DropdownProps.js'?
        
        The request './DropdownProps' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/dropdown/index.js 3:0-27
  × Module not found: Can't resolve './MenuItem' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/dropdown'
   ╭─[3:14]
 1 │ export * from './Dropdown';
 2 │ export * from './DropdownProps';
 3 │ export * from './MenuItem';
   ·               ────────────
   ╰────
  help: Did you mean './MenuItem.js'?
        
        The request './MenuItem' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useBreakpoints.js 7:0-40
  × Module not found: Can't resolve '../styles/media' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/hooks'
   ╭─[7:22]
 5 │ function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 6 │ import { useCallback, useContext, useRef, useSyncExternalStore } from 'react';
 7 │ import { media } from '../styles/media';
   ·                       ─────────────────
 8 │ import { MediaQueryContext } from '../system/MediaQueryProvider';
 9 │ const booleanDeviceNames = {
   ╰────
  help: Did you mean '../styles/media.js'?
        
        The request '../styles/media' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useBreakpoints.js 8:0-65
  × Module not found: Can't resolve '../system/MediaQueryProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/hooks'
    ╭─[8:34]
  6 │ import { useCallback, useContext, useRef, useSyncExternalStore } from 'react';
  7 │ import { media } from '../styles/media';
  8 │ import { MediaQueryContext } from '../system/MediaQueryProvider';
    ·                                   ──────────────────────────────
  9 │ const booleanDeviceNames = {
 10 │   phone: 'isPhone',
    ╰────
  help: Did you mean '../system/MediaQueryProvider.js'?
        
        The request '../system/MediaQueryProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useHasMounted.js 2:0-45
  × Module not found: Can't resolve '../utils/browser' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/hooks'
   ╭─[2:26]
 1 │ import { useEffect, useMemo, useState } from 'react';
 2 │ import { isBrowser } from '../utils/browser';
   ·                           ──────────────────
 3 │ export const useHasMounted = () => {
 4 │   const [hasMounted, setHasMounted] = useState(false);
   ╰────
  help: Did you mean '../utils/browser.js'?
        
        The request '../utils/browser' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useIsoEffect.js 2:0-45
  × Module not found: Can't resolve '../utils/browser' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/hooks'
   ╭─[2:26]
 1 │ import { useEffect, useLayoutEffect } from 'react';
 2 │ import { isBrowser } from '../utils/browser';
   ·                           ──────────────────
 3 │ export const useIsoEffect = isBrowser() ? useLayoutEffect : useEffect;
   ╰────
  help: Did you mean '../utils/browser.js'?
        
        The request '../utils/browser' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useMediaQuery.js 3:0-65
  × Module not found: Can't resolve '../system/MediaQueryProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/hooks'
   ╭─[3:34]
 1 │ import { useCallback, useContext, useSyncExternalStore } from 'react';
 2 │ import { isDevelopment } from '@coinbase/cds-utils';
 3 │ import { MediaQueryContext } from '../system/MediaQueryProvider';
   ·                                   ──────────────────────────────
 4 │ const complexQueryCharacters = ['<', '>', '=', ',', ' or ', ' not ', '(((', ')))'];
 5 │ export const useMediaQuery = query => {
   ╰────
  help: Did you mean '../system/MediaQueryProvider.js'?
        
        The request '../system/MediaQueryProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useMediaQuery.js
  × ESModulesLinkingError: export 'isDevelopment' (imported as 'isDevelopment') was not found in '@coinbase/cds-utils' (module has no exports)
    ╭─[8:6]
  6 │   const context = useContext(MediaQueryContext);
  7 │   if (!context) throw Error('useMediaQuery must be used within a MediaQueryProvider');
  8 │   if (isDevelopment() && complexQueryCharacters.some(char => query.includes(char))) {
    ·       ─────────────
  9 │     console.warn("useMediaQuery received a complex query which may return an incorrect result for server renders: \"".concat(query, "\". See the docs at https://docs.graybulk.com/hooks/useMediaQuery/#ssr-support"));
 10 │   }
    ╰────
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useScrollBlocker.js 2:0-41
  × Module not found: Can't resolve '../utils/browser' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/hooks'
   ╭─[2:22]
 1 │ import { useCallback, useRef } from 'react';
 2 │ import { isSSR } from '../utils/browser';
   ·                       ──────────────────
 3 │ export const useScrollBlocker = () => {
 4 │   const scroll = useRef(false);
   ╰────
  help: Did you mean '../utils/browser.js'?
        
        The request '../utils/browser' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/hooks/useTheme.js 2:0-55
  × Module not found: Can't resolve '../system/ThemeProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/hooks'
   ╭─[2:29]
 1 │ import { useContext } from 'react';
 2 │ import { ThemeContext } from '../system/ThemeProvider';
   ·                              ─────────────────────────
 3 │ 
 4 │ /** Returns the currently active Theme, determined by the ThemeProvider's `activeColorScheme`. */
   ╰────
  help: Did you mean '../system/ThemeProvider.js'?
        
        The request '../system/ThemeProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/Icon.js 12:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
    ╭─[12:19]
 10 │ import { glyphMap } from '@coinbase/cds-icons/glyphMap';
 11 │ import { isDevelopment } from '@coinbase/cds-utils/env';
 12 │ import { cx } from '../cx';
    ·                    ───────
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { useTheme } from '../hooks/useTheme';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/Icon.js 13:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
    ╭─[13:35]
 11 │ import { isDevelopment } from '@coinbase/cds-utils/env';
 12 │ import { cx } from '../cx';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { Box } from '../layout/Box';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/Icon.js 14:0-45
  × Module not found: Can't resolve '../hooks/useTheme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
    ╭─[14:25]
 12 │ import { cx } from '../cx';
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { useTheme } from '../hooks/useTheme';
    ·                          ───────────────────
 15 │ import { Box } from '../layout/Box';
 16 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../hooks/useTheme.js'?
        
        The request '../hooks/useTheme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/Icon.js 15:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
    ╭─[15:20]
 13 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 14 │ import { useTheme } from '../hooks/useTheme';
 15 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 16 │ import { jsx as _jsx } from "react/jsx-runtime";
 17 │ const COMPONENT_STATIC_CLASSNAME = 'cds-Icon';
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/index.js 1:0-23
  × Module not found: Can't resolve './Icon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
   ╭─[1:14]
 1 │ export * from './Icon';
   ·               ────────
 2 │ export * from './LogoMark';
 3 │ export * from './LogoWordmark';
   ╰────
  help: Did you mean './Icon.js'?
        
        The request './Icon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/index.js 2:0-27
  × Module not found: Can't resolve './LogoMark' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
   ╭─[2:14]
 1 │ export * from './Icon';
 2 │ export * from './LogoMark';
   ·               ────────────
 3 │ export * from './LogoWordmark';
 4 │ export * from './SubBrandLogoMark';
   ╰────
  help: Did you mean './LogoMark.js'?
        
        The request './LogoMark' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/index.js 3:0-31
  × Module not found: Can't resolve './LogoWordmark' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
   ╭─[3:14]
 1 │ export * from './Icon';
 2 │ export * from './LogoMark';
 3 │ export * from './LogoWordmark';
   ·               ────────────────
 4 │ export * from './SubBrandLogoMark';
 5 │ export * from './SubBrandLogoWordmark';
   ╰────
  help: Did you mean './LogoWordmark.js'?
        
        The request './LogoWordmark' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/index.js 4:0-35
  × Module not found: Can't resolve './SubBrandLogoMark' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
   ╭─[4:14]
 2 │ export * from './LogoMark';
 3 │ export * from './LogoWordmark';
 4 │ export * from './SubBrandLogoMark';
   ·               ────────────────────
 5 │ export * from './SubBrandLogoWordmark';
   ╰────
  help: Did you mean './SubBrandLogoMark.js'?
        
        The request './SubBrandLogoMark' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/icons/index.js 5:0-39
  × Module not found: Can't resolve './SubBrandLogoWordmark' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/icons'
   ╭─[5:14]
 3 │ export * from './LogoWordmark';
 4 │ export * from './SubBrandLogoMark';
 5 │ export * from './SubBrandLogoWordmark';
   ·               ────────────────────────
   ╰────
  help: Did you mean './SubBrandLogoWordmark.js'?
        
        The request './SubBrandLogoWordmark' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/illustrations/Pictogram.js 3:0-58
  × Module not found: Can't resolve './createIllustration' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/illustrations'
   ╭─[3:35]
 1 │ import pictogramSvgEsmMap from '@coinbase/cds-illustrations/__generated__/pictogram/data/svgEsmMap';
 2 │ import pictogramVersionMap from '@coinbase/cds-illustrations/__generated__/pictogram/data/versionMap';
 3 │ import { createIllustration } from './createIllustration';
   ·                                    ──────────────────────
 4 │ export const Pictogram = createIllustration('pictogram', pictogramVersionMap, pictogramSvgEsmMap);
   ╰────
  help: Did you mean './createIllustration.js'?
        
        The request './createIllustration' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/illustrations/index.js 1:0-29
  × Module not found: Can't resolve './HeroSquare' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/illustrations'
   ╭─[1:14]
 1 │ export * from './HeroSquare';
   ·               ──────────────
 2 │ export * from './Pictogram';
 3 │ export * from './SpotIcon';
   ╰────
  help: Did you mean './HeroSquare.js'?
        
        The request './HeroSquare' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/illustrations/index.js 2:0-28
  × Module not found: Can't resolve './Pictogram' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/illustrations'
   ╭─[2:14]
 1 │ export * from './HeroSquare';
 2 │ export * from './Pictogram';
   ·               ─────────────
 3 │ export * from './SpotIcon';
 4 │ export * from './SpotRectangle';
   ╰────
  help: Did you mean './Pictogram.js'?
        
        The request './Pictogram' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/illustrations/index.js 3:0-27
  × Module not found: Can't resolve './SpotIcon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/illustrations'
   ╭─[3:14]
 1 │ export * from './HeroSquare';
 2 │ export * from './Pictogram';
 3 │ export * from './SpotIcon';
   ·               ────────────
 4 │ export * from './SpotRectangle';
 5 │ export * from './SpotSquare';
   ╰────
  help: Did you mean './SpotIcon.js'?
        
        The request './SpotIcon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/illustrations/index.js 4:0-32
  × Module not found: Can't resolve './SpotRectangle' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/illustrations'
   ╭─[4:14]
 2 │ export * from './Pictogram';
 3 │ export * from './SpotIcon';
 4 │ export * from './SpotRectangle';
   ·               ─────────────────
 5 │ export * from './SpotSquare';
   ╰────
  help: Did you mean './SpotRectangle.js'?
        
        The request './SpotRectangle' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/illustrations/index.js 5:0-29
  × Module not found: Can't resolve './SpotSquare' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/illustrations'
   ╭─[5:14]
 3 │ export * from './SpotIcon';
 4 │ export * from './SpotRectangle';
 5 │ export * from './SpotSquare';
   ·               ──────────────
   ╰────
  help: Did you mean './SpotSquare.js'?
        
        The request './SpotSquare' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 1:0-42
  × Module not found: Can't resolve './core/createThemeCssVars' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[1:14]
 1 │ export * from './core/createThemeCssVars';
   ·               ───────────────────────────
 2 │ export * from './core/polymorphism';
 3 │ export * from './core/theme';
   ╰────
  help: Did you mean './core/createThemeCssVars.js'?
        
        The request './core/createThemeCssVars' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 2:0-36
  × Module not found: Can't resolve './core/polymorphism' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[2:14]
 1 │ export * from './core/createThemeCssVars';
 2 │ export * from './core/polymorphism';
   ·               ─────────────────────
 3 │ export * from './core/theme';
 4 │ export * from './cx';
   ╰────
  help: Did you mean './core/polymorphism.js'?
        
        The request './core/polymorphism' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 3:0-29
  × Module not found: Can't resolve './core/theme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[3:14]
 1 │ export * from './core/createThemeCssVars';
 2 │ export * from './core/polymorphism';
 3 │ export * from './core/theme';
   ·               ──────────────
 4 │ export * from './cx';
 5 │ export * from './hooks/useComponentConfig';
   ╰────
  help: Did you mean './core/theme.js'?
        
        The request './core/theme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 4:0-21
  × Module not found: Can't resolve './cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[4:14]
 2 │ export * from './core/polymorphism';
 3 │ export * from './core/theme';
 4 │ export * from './cx';
   ·               ──────
 5 │ export * from './hooks/useComponentConfig';
 6 │ export * from './hooks/useTheme';
   ╰────
  help: Did you mean './cx.js'?
        
        The request './cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 5:0-43
  × Module not found: Can't resolve './hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[5:14]
 3 │ export * from './core/theme';
 4 │ export * from './cx';
 5 │ export * from './hooks/useComponentConfig';
   ·               ────────────────────────────
 6 │ export * from './hooks/useTheme';
 7 │ export * from './system/ComponentConfigProvider';
   ╰────
  help: Did you mean './hooks/useComponentConfig.js'?
        
        The request './hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 6:0-33
  × Module not found: Can't resolve './hooks/useTheme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[6:14]
 4 │ export * from './cx';
 5 │ export * from './hooks/useComponentConfig';
 6 │ export * from './hooks/useTheme';
   ·               ──────────────────
 7 │ export * from './system/ComponentConfigProvider';
 8 │ export * from './system/ThemeProvider';
   ╰────
  help: Did you mean './hooks/useTheme.js'?
        
        The request './hooks/useTheme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 7:0-49
  × Module not found: Can't resolve './system/ComponentConfigProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[7:14]
 5 │ export * from './hooks/useComponentConfig';
 6 │ export * from './hooks/useTheme';
 7 │ export * from './system/ComponentConfigProvider';
   ·               ──────────────────────────────────
 8 │ export * from './system/ThemeProvider';
   ╰────
  help: Did you mean './system/ComponentConfigProvider.js'?
        
        The request './system/ComponentConfigProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/index.js 8:0-39
  × Module not found: Can't resolve './system/ThemeProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm'
   ╭─[8:14]
 6 │ export * from './hooks/useTheme';
 7 │ export * from './system/ComponentConfigProvider';
 8 │ export * from './system/ThemeProvider';
   ·               ────────────────────────
   ╰────
  help: Did you mean './system/ThemeProvider.js'?
        
        The request './system/ThemeProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Box.js 10:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[10:19]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { cx } from '../cx';
    ·                    ───────
 11 │ import { borderStyle, pinStyle } from '../styles/booleanStyles';
 12 │ import { getStyles } from '../styles/styleProps';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Box.js 11:0-64
  × Module not found: Can't resolve '../styles/booleanStyles' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[11:38]
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { cx } from '../cx';
 11 │ import { borderStyle, pinStyle } from '../styles/booleanStyles';
    ·                                       ─────────────────────────
 12 │ import { getStyles } from '../styles/styleProps';
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../styles/booleanStyles.js'?
        
        The request '../styles/booleanStyles' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Box.js 12:0-49
  × Module not found: Can't resolve '../styles/styleProps' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[12:26]
 10 │ import { cx } from '../cx';
 11 │ import { borderStyle, pinStyle } from '../styles/booleanStyles';
 12 │ import { getStyles } from '../styles/styleProps';
    ·                           ──────────────────────
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
 14 │ export const boxDefaultElement = 'div';
    ╰────
  help: Did you mean '../styles/styleProps.js'?
        
        The request '../styles/styleProps' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Divider.js 10:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[10:35]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { memo } from 'react';
 10 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 11 │ import { Box } from './Box';
 12 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Divider.js 11:0-28
  × Module not found: Can't resolve './Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[11:20]
  9 │ import React, { memo } from 'react';
 10 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 11 │ import { Box } from './Box';
    ·                     ───────
 12 │ import { jsx as _jsx } from "react/jsx-runtime";
 13 │ const directionCss = {
    ╰────
  help: Did you mean './Box.js'?
        
        The request './Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Fallback.js 11:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[11:35]
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { useFallbackShape } from '@coinbase/cds-common/hooks/useFallbackShape';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 12 │ import { Box } from './Box';
 13 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Fallback.js 12:0-28
  × Module not found: Can't resolve './Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[12:20]
 10 │ import { useFallbackShape } from '@coinbase/cds-common/hooks/useFallbackShape';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { Box } from './Box';
    ·                     ───────
 13 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 14 │ const fallbackCss = "fallbackCss-f1n296p1";
    ╰────
  help: Did you mean './Box.js'?
        
        The request './Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/Grid.js 10:0-28
  × Module not found: Can't resolve './Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[10:20]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { forwardRef, useMemo } from 'react';
 10 │ import { Box } from './Box';
    ·                     ───────
 11 │ import { jsx as _jsx } from "react/jsx-runtime";
 12 │ export const gridDefaultElement = 'div';
    ╰────
  help: Did you mean './Box.js'?
        
        The request './Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/HStack.js 10:0-28
  × Module not found: Can't resolve './Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[10:20]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { forwardRef } from 'react';
 10 │ import { Box } from './Box';
    ·                     ───────
 11 │ import { jsx as _jsx } from "react/jsx-runtime";
 12 │ export const hStackDefaultElement = 'div';
    ╰────
  help: Did you mean './Box.js'?
        
        The request './Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/VStack.js 10:0-28
  × Module not found: Can't resolve './Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
    ╭─[10:20]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { forwardRef } from 'react';
 10 │ import { Box } from './Box';
    ·                     ───────
 11 │ import { jsx as _jsx } from "react/jsx-runtime";
 12 │ export const vStackDefaultElement = 'div';
    ╰────
  help: Did you mean './Box.js'?
        
        The request './Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 1:0-22
  × Module not found: Can't resolve './Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[1:14]
 1 │ export * from './Box';
   ·               ───────
 2 │ export * from './Divider';
 3 │ export * from './Fallback';
   ╰────
  help: Did you mean './Box.js'?
        
        The request './Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 2:0-26
  × Module not found: Can't resolve './Divider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[2:14]
 1 │ export * from './Box';
 2 │ export * from './Divider';
   ·               ───────────
 3 │ export * from './Fallback';
 4 │ export * from './Grid';
   ╰────
  help: Did you mean './Divider.js'?
        
        The request './Divider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 3:0-27
  × Module not found: Can't resolve './Fallback' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[3:14]
 1 │ export * from './Box';
 2 │ export * from './Divider';
 3 │ export * from './Fallback';
   ·               ────────────
 4 │ export * from './Grid';
 5 │ export * from './GridColumn';
   ╰────
  help: Did you mean './Fallback.js'?
        
        The request './Fallback' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 4:0-23
  × Module not found: Can't resolve './Grid' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[4:14]
 2 │ export * from './Divider';
 3 │ export * from './Fallback';
 4 │ export * from './Grid';
   ·               ────────
 5 │ export * from './GridColumn';
 6 │ export * from './Group';
   ╰────
  help: Did you mean './Grid.js'?
        
        The request './Grid' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 5:0-29
  × Module not found: Can't resolve './GridColumn' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[5:14]
 3 │ export * from './Fallback';
 4 │ export * from './Grid';
 5 │ export * from './GridColumn';
   ·               ──────────────
 6 │ export * from './Group';
 7 │ export * from './HStack';
   ╰────
  help: Did you mean './GridColumn.js'?
        
        The request './GridColumn' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 6:0-24
  × Module not found: Can't resolve './Group' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[6:14]
 4 │ export * from './Grid';
 5 │ export * from './GridColumn';
 6 │ export * from './Group';
   ·               ─────────
 7 │ export * from './HStack';
 8 │ export * from './Spacer';
   ╰────
  help: Did you mean './Group.js'?
        
        The request './Group' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 7:0-25
  × Module not found: Can't resolve './HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[7:14]
 5 │ export * from './GridColumn';
 6 │ export * from './Group';
 7 │ export * from './HStack';
   ·               ──────────
 8 │ export * from './Spacer';
 9 │ export * from './VStack';
   ╰────
  help: Did you mean './HStack.js'?
        
        The request './HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 8:0-25
  × Module not found: Can't resolve './Spacer' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[8:14]
 6 │ export * from './Group';
 7 │ export * from './HStack';
 8 │ export * from './Spacer';
   ·               ──────────
 9 │ export * from './VStack';
   ╰────
  help: Did you mean './Spacer.js'?
        
        The request './Spacer' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/layout/index.js 9:0-25
  × Module not found: Can't resolve './VStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/layout'
   ╭─[9:14]
 7 │ export * from './HStack';
 8 │ export * from './Spacer';
 9 │ export * from './VStack';
   ·               ──────────
   ╰────
  help: Did you mean './VStack.js'?
        
        The request './VStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/loaders/Spinner.js 10:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/loaders'
    ╭─[10:19]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { memo, useMemo } from 'react';
 10 │ import { cx } from '../cx';
    ·                    ───────
 11 │ import { Box } from '../layout/Box';
 12 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/loaders/Spinner.js 11:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/loaders'
    ╭─[11:20]
  9 │ import React, { memo, useMemo } from 'react';
 10 │ import { cx } from '../cx';
 11 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 12 │ import { jsx as _jsx } from "react/jsx-runtime";
 13 │ const COMPONENT_STATIC_CLASSNAME = 'cds-Spinner';
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/loaders/index.js 1:0-26
  × Module not found: Can't resolve './Spinner' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/loaders'
   ╭────
 1 │ export * from './Spinner';
   ·               ───────────
   ╰────
  help: Did you mean './Spinner.js'?
        
        The request './Spinner' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/media/index.js 1:0-25
  × Module not found: Can't resolve './Avatar' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/media'
   ╭─[1:14]
 1 │ export * from './Avatar';
   ·               ──────────
 2 │ export * from './RemoteImage';
 3 │ export * from './RemoteImageGroup';
   ╰────
  help: Did you mean './Avatar.js'?
        
        The request './Avatar' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/media/index.js 2:0-30
  × Module not found: Can't resolve './RemoteImage' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/media'
   ╭─[2:14]
 1 │ export * from './Avatar';
 2 │ export * from './RemoteImage';
   ·               ───────────────
 3 │ export * from './RemoteImageGroup';
   ╰────
  help: Did you mean './RemoteImage.js'?
        
        The request './RemoteImage' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/media/index.js 3:0-35
  × Module not found: Can't resolve './RemoteImageGroup' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/media'
   ╭─[3:14]
 1 │ export * from './Avatar';
 2 │ export * from './RemoteImage';
 3 │ export * from './RemoteImageGroup';
   ·               ────────────────────
   ╰────
  help: Did you mean './RemoteImageGroup.js'?
        
        The request './RemoteImageGroup' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/multi-content-module/index.js 1:0-37
  × Module not found: Can't resolve './MultiContentModule' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/multi-content-module'
   ╭────
 1 │ export * from './MultiContentModule';
   ·               ──────────────────────
   ╰────
  help: Did you mean './MultiContentModule.js'?
        
        The request './MultiContentModule' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/navigation/index.js 1:0-32
  × Module not found: Can't resolve './NavigationBar' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/navigation'
   ╭─[1:14]
 1 │ export * from './NavigationBar';
   ·               ─────────────────
 2 │ export * from './NavigationTitle';
 3 │ export * from './NavigationTitleSelect';
   ╰────
  help: Did you mean './NavigationBar.js'?
        
        The request './NavigationBar' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/navigation/index.js 2:0-34
  × Module not found: Can't resolve './NavigationTitle' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/navigation'
   ╭─[2:14]
 1 │ export * from './NavigationBar';
 2 │ export * from './NavigationTitle';
   ·               ───────────────────
 3 │ export * from './NavigationTitleSelect';
 4 │ export * from './NavLink';
   ╰────
  help: Did you mean './NavigationTitle.js'?
        
        The request './NavigationTitle' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/navigation/index.js 3:0-40
  × Module not found: Can't resolve './NavigationTitleSelect' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/navigation'
   ╭─[3:14]
 1 │ export * from './NavigationBar';
 2 │ export * from './NavigationTitle';
 3 │ export * from './NavigationTitleSelect';
   ·               ─────────────────────────
 4 │ export * from './NavLink';
 5 │ export * from './Sidebar';
   ╰────
  help: Did you mean './NavigationTitleSelect.js'?
        
        The request './NavigationTitleSelect' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/navigation/index.js 4:0-26
  × Module not found: Can't resolve './NavLink' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/navigation'
   ╭─[4:14]
 2 │ export * from './NavigationTitle';
 3 │ export * from './NavigationTitleSelect';
 4 │ export * from './NavLink';
   ·               ───────────
 5 │ export * from './Sidebar';
 6 │ export * from './SidebarItem';
   ╰────
  help: Did you mean './NavLink.js'?
        
        The request './NavLink' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/navigation/index.js 5:0-26
  × Module not found: Can't resolve './Sidebar' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/navigation'
   ╭─[5:14]
 3 │ export * from './NavigationTitleSelect';
 4 │ export * from './NavLink';
 5 │ export * from './Sidebar';
   ·               ───────────
 6 │ export * from './SidebarItem';
 7 │ export * from './SidebarMoreMenu';
   ╰────
  help: Did you mean './Sidebar.js'?
        
        The request './Sidebar' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/navigation/index.js 6:0-30
  × Module not found: Can't resolve './SidebarItem' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/navigation'
   ╭─[6:14]
 4 │ export * from './NavLink';
 5 │ export * from './Sidebar';
 6 │ export * from './SidebarItem';
   ·               ───────────────
 7 │ export * from './SidebarMoreMenu';
   ╰────
  help: Did you mean './SidebarItem.js'?
        
        The request './SidebarItem' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/navigation/index.js 7:0-34
  × Module not found: Can't resolve './SidebarMoreMenu' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/navigation'
   ╭─[7:14]
 5 │ export * from './Sidebar';
 6 │ export * from './SidebarItem';
 7 │ export * from './SidebarMoreMenu';
   ·               ───────────────────
   ╰────
  help: Did you mean './SidebarMoreMenu.js'?
        
        The request './SidebarMoreMenu' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/numbers/RollingNumber/index.js 1:0-51
  × Module not found: Can't resolve './DefaultRollingNumberAffixSection' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/numbers/RollingNumber'
   ╭─[1:14]
 1 │ export * from './DefaultRollingNumberAffixSection';
   ·               ────────────────────────────────────
 2 │ export * from './DefaultRollingNumberDigit';
 3 │ export * from './DefaultRollingNumberMask';
   ╰────
  help: Did you mean './DefaultRollingNumberAffixSection.js'?
        
        The request './DefaultRollingNumberAffixSection' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/numbers/RollingNumber/index.js 2:0-44
  × Module not found: Can't resolve './DefaultRollingNumberDigit' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/numbers/RollingNumber'
   ╭─[2:14]
 1 │ export * from './DefaultRollingNumberAffixSection';
 2 │ export * from './DefaultRollingNumberDigit';
   ·               ─────────────────────────────
 3 │ export * from './DefaultRollingNumberMask';
 4 │ export * from './DefaultRollingNumberSymbol';
   ╰────
  help: Did you mean './DefaultRollingNumberDigit.js'?
        
        The request './DefaultRollingNumberDigit' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/numbers/RollingNumber/index.js 3:0-43
  × Module not found: Can't resolve './DefaultRollingNumberMask' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/numbers/RollingNumber'
   ╭─[3:14]
 1 │ export * from './DefaultRollingNumberAffixSection';
 2 │ export * from './DefaultRollingNumberDigit';
 3 │ export * from './DefaultRollingNumberMask';
   ·               ────────────────────────────
 4 │ export * from './DefaultRollingNumberSymbol';
 5 │ export * from './DefaultRollingNumberValueSection';
   ╰────
  help: Did you mean './DefaultRollingNumberMask.js'?
        
        The request './DefaultRollingNumberMask' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/numbers/RollingNumber/index.js 4:0-45
  × Module not found: Can't resolve './DefaultRollingNumberSymbol' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/numbers/RollingNumber'
   ╭─[4:14]
 2 │ export * from './DefaultRollingNumberDigit';
 3 │ export * from './DefaultRollingNumberMask';
 4 │ export * from './DefaultRollingNumberSymbol';
   ·               ──────────────────────────────
 5 │ export * from './DefaultRollingNumberValueSection';
 6 │ export * from './RollingNumber';
   ╰────
  help: Did you mean './DefaultRollingNumberSymbol.js'?
        
        The request './DefaultRollingNumberSymbol' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/numbers/RollingNumber/index.js 5:0-51
  × Module not found: Can't resolve './DefaultRollingNumberValueSection' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/numbers/RollingNumber'
   ╭─[5:14]
 3 │ export * from './DefaultRollingNumberMask';
 4 │ export * from './DefaultRollingNumberSymbol';
 5 │ export * from './DefaultRollingNumberValueSection';
   ·               ────────────────────────────────────
 6 │ export * from './RollingNumber';
   ╰────
  help: Did you mean './DefaultRollingNumberValueSection.js'?
        
        The request './DefaultRollingNumberValueSection' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/numbers/RollingNumber/index.js 6:0-32
  × Module not found: Can't resolve './RollingNumber' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/numbers/RollingNumber'
   ╭─[6:14]
 4 │ export * from './DefaultRollingNumberSymbol';
 5 │ export * from './DefaultRollingNumberValueSection';
 6 │ export * from './RollingNumber';
   ·               ─────────────────
   ╰────
  help: Did you mean './RollingNumber.js'?
        
        The request './RollingNumber' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/numbers/index.js 1:0-32
  × Module not found: Can't resolve './RollingNumber' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/numbers'
   ╭────
 1 │ export * from './RollingNumber';
   ·               ─────────────────
   ╰────
  help: Did you mean './RollingNumber/index.js'?
        
        The request './RollingNumber' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/FocusTrap.js 5:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[5:35]
 3 │ import { debounce } from '@coinbase/cds-common/utils/debounce';
 4 │ import { mergeReactElementRef } from '@coinbase/cds-common/utils/mergeRefs';
 5 │ import { useComponentConfig } from '../hooks/useComponentConfig';
   ·                                    ─────────────────────────────
 6 │ import { getBrowserGlobals } from '../utils/browser';
 7 │ import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
   ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/FocusTrap.js 6:0-53
  × Module not found: Can't resolve '../utils/browser' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[6:34]
 4 │ import { mergeReactElementRef } from '@coinbase/cds-common/utils/mergeRefs';
 5 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 6 │ import { getBrowserGlobals } from '../utils/browser';
   ·                                   ──────────────────
 7 │ import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
 8 │ const DEBOUNCE_MS = 50;
   ╰────
  help: Did you mean '../utils/browser.js'?
        
        The request '../utils/browser' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/PortalProvider.js 9:0-54
  × Module not found: Can't resolve '../media/Hexagon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[9:35]
  7 │ import { usePortalState } from '@coinbase/cds-common/overlays/usePortalState';
  8 │ import { zIndex } from '@coinbase/cds-common/tokens/zIndex';
  9 │ import { IsoHexagonClipPath } from '../media/Hexagon';
    ·                                    ──────────────────
 10 │ import { BrowserOnly } from '../system/BrowserOnly';
 11 │ import { getBrowserGlobals } from '../utils/browser';
    ╰────
  help: Did you mean '../media/Hexagon.js'?
        
        The request '../media/Hexagon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/PortalProvider.js 10:0-52
  × Module not found: Can't resolve '../system/BrowserOnly' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[10:28]
  8 │ import { zIndex } from '@coinbase/cds-common/tokens/zIndex';
  9 │ import { IsoHexagonClipPath } from '../media/Hexagon';
 10 │ import { BrowserOnly } from '../system/BrowserOnly';
    ·                             ───────────────────────
 11 │ import { getBrowserGlobals } from '../utils/browser';
 12 │ import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/BrowserOnly.js'?
        
        The request '../system/BrowserOnly' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/PortalProvider.js 11:0-53
  × Module not found: Can't resolve '../utils/browser' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[11:34]
  9 │ import { IsoHexagonClipPath } from '../media/Hexagon';
 10 │ import { BrowserOnly } from '../system/BrowserOnly';
 11 │ import { getBrowserGlobals } from '../utils/browser';
    ·                                   ──────────────────
 12 │ import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
 13 │ export const portalRootId = 'portalRoot';
    ╰────
  help: Did you mean '../utils/browser.js'?
        
        The request '../utils/browser' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 1:0-24
  × Module not found: Can't resolve './Alert' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[1:14]
 1 │ export * from './Alert';
   ·               ─────────
 2 │ export * from './FocusTrap';
 3 │ export * from './FullscreenAlert';
   ╰────
  help: Did you mean './Alert.js'?
        
        The request './Alert' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 2:0-28
  × Module not found: Can't resolve './FocusTrap' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[2:14]
 1 │ export * from './Alert';
 2 │ export * from './FocusTrap';
   ·               ─────────────
 3 │ export * from './FullscreenAlert';
 4 │ export * from './modal/FullscreenModal';
   ╰────
  help: Did you mean './FocusTrap.js'?
        
        The request './FocusTrap' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 3:0-34
  × Module not found: Can't resolve './FullscreenAlert' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[3:14]
 1 │ export * from './Alert';
 2 │ export * from './FocusTrap';
 3 │ export * from './FullscreenAlert';
   ·               ───────────────────
 4 │ export * from './modal/FullscreenModal';
 5 │ export * from './modal/FullscreenModalHeader';
   ╰────
  help: Did you mean './FullscreenAlert.js'?
        
        The request './FullscreenAlert' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 4:0-40
  × Module not found: Can't resolve './modal/FullscreenModal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[4:14]
 2 │ export * from './FocusTrap';
 3 │ export * from './FullscreenAlert';
 4 │ export * from './modal/FullscreenModal';
   ·               ─────────────────────────
 5 │ export * from './modal/FullscreenModalHeader';
 6 │ export * from './modal/FullscreenModalLayout';
   ╰────
  help: Did you mean './modal/FullscreenModal.js'?
        
        The request './modal/FullscreenModal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 5:0-46
  × Module not found: Can't resolve './modal/FullscreenModalHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[5:14]
 3 │ export * from './FullscreenAlert';
 4 │ export * from './modal/FullscreenModal';
 5 │ export * from './modal/FullscreenModalHeader';
   ·               ───────────────────────────────
 6 │ export * from './modal/FullscreenModalLayout';
 7 │ export * from './modal/Modal';
   ╰────
  help: Did you mean './modal/FullscreenModalHeader.js'?
        
        The request './modal/FullscreenModalHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 6:0-46
  × Module not found: Can't resolve './modal/FullscreenModalLayout' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[6:14]
 4 │ export * from './modal/FullscreenModal';
 5 │ export * from './modal/FullscreenModalHeader';
 6 │ export * from './modal/FullscreenModalLayout';
   ·               ───────────────────────────────
 7 │ export * from './modal/Modal';
 8 │ export * from './modal/ModalBody';
   ╰────
  help: Did you mean './modal/FullscreenModalLayout.js'?
        
        The request './modal/FullscreenModalLayout' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 7:0-30
  × Module not found: Can't resolve './modal/Modal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
   ╭─[7:14]
 5 │ export * from './modal/FullscreenModalHeader';
 6 │ export * from './modal/FullscreenModalLayout';
 7 │ export * from './modal/Modal';
   ·               ───────────────
 8 │ export * from './modal/ModalBody';
 9 │ export * from './modal/ModalFooter';
   ╰────
  help: Did you mean './modal/Modal.js'?
        
        The request './modal/Modal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 8:0-34
  × Module not found: Can't resolve './modal/ModalBody' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[8:14]
  6 │ export * from './modal/FullscreenModalLayout';
  7 │ export * from './modal/Modal';
  8 │ export * from './modal/ModalBody';
    ·               ───────────────────
  9 │ export * from './modal/ModalFooter';
 10 │ export * from './modal/ModalHeader';
    ╰────
  help: Did you mean './modal/ModalBody.js'?
        
        The request './modal/ModalBody' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 9:0-36
  × Module not found: Can't resolve './modal/ModalFooter' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[9:14]
  7 │ export * from './modal/Modal';
  8 │ export * from './modal/ModalBody';
  9 │ export * from './modal/ModalFooter';
    ·               ─────────────────────
 10 │ export * from './modal/ModalHeader';
 11 │ export * from './overlay/Overlay';
    ╰────
  help: Did you mean './modal/ModalFooter.js'?
        
        The request './modal/ModalFooter' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 10:0-36
  × Module not found: Can't resolve './modal/ModalHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[10:14]
  8 │ export * from './modal/ModalBody';
  9 │ export * from './modal/ModalFooter';
 10 │ export * from './modal/ModalHeader';
    ·               ─────────────────────
 11 │ export * from './overlay/Overlay';
 12 │ export * from './popover/Popover';
    ╰────
  help: Did you mean './modal/ModalHeader.js'?
        
        The request './modal/ModalHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 11:0-34
  × Module not found: Can't resolve './overlay/Overlay' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[11:14]
  9 │ export * from './modal/ModalFooter';
 10 │ export * from './modal/ModalHeader';
 11 │ export * from './overlay/Overlay';
    ·               ───────────────────
 12 │ export * from './popover/Popover';
 13 │ export * from './popover/PopoverPanel';
    ╰────
  help: Did you mean './overlay/Overlay.js'?
        
        The request './overlay/Overlay' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 12:0-34
  × Module not found: Can't resolve './popover/Popover' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[12:14]
 10 │ export * from './modal/ModalHeader';
 11 │ export * from './overlay/Overlay';
 12 │ export * from './popover/Popover';
    ·               ───────────────────
 13 │ export * from './popover/PopoverPanel';
 14 │ export * from './popover/PopoverProps';
    ╰────
  help: Did you mean './popover/Popover.js'?
        
        The request './popover/Popover' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 13:0-39
  × Module not found: Can't resolve './popover/PopoverPanel' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[13:14]
 11 │ export * from './overlay/Overlay';
 12 │ export * from './popover/Popover';
 13 │ export * from './popover/PopoverPanel';
    ·               ────────────────────────
 14 │ export * from './popover/PopoverProps';
 15 │ export * from './popover/usePopper';
    ╰────
  help: Did you mean './popover/PopoverPanel.js'?
        
        The request './popover/PopoverPanel' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 14:0-39
  × Module not found: Can't resolve './popover/PopoverProps' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[14:14]
 12 │ export * from './popover/Popover';
 13 │ export * from './popover/PopoverPanel';
 14 │ export * from './popover/PopoverProps';
    ·               ────────────────────────
 15 │ export * from './popover/usePopper';
 16 │ export * from './PortalProvider';
    ╰────
  help: Did you mean './popover/PopoverProps.js'?
        
        The request './popover/PopoverProps' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 15:0-36
  × Module not found: Can't resolve './popover/usePopper' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[15:14]
 13 │ export * from './popover/PopoverPanel';
 14 │ export * from './popover/PopoverProps';
 15 │ export * from './popover/usePopper';
    ·               ─────────────────────
 16 │ export * from './PortalProvider';
 17 │ export * from './Toast';
    ╰────
  help: Did you mean './popover/usePopper.js'?
        
        The request './popover/usePopper' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 16:0-33
  × Module not found: Can't resolve './PortalProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[16:14]
 14 │ export * from './popover/PopoverProps';
 15 │ export * from './popover/usePopper';
 16 │ export * from './PortalProvider';
    ·               ──────────────────
 17 │ export * from './Toast';
 18 │ export * from './tooltip/Tooltip';
    ╰────
  help: Did you mean './PortalProvider.js'?
        
        The request './PortalProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 17:0-24
  × Module not found: Can't resolve './Toast' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[17:14]
 15 │ export * from './popover/usePopper';
 16 │ export * from './PortalProvider';
 17 │ export * from './Toast';
    ·               ─────────
 18 │ export * from './tooltip/Tooltip';
 19 │ export * from './tray/Tray';
    ╰────
  help: Did you mean './Toast.js'?
        
        The request './Toast' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 18:0-34
  × Module not found: Can't resolve './tooltip/Tooltip' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[18:14]
 16 │ export * from './PortalProvider';
 17 │ export * from './Toast';
 18 │ export * from './tooltip/Tooltip';
    ·               ───────────────────
 19 │ export * from './tray/Tray';
    ╰────
  help: Did you mean './tooltip/Tooltip.js'?
        
        The request './tooltip/Tooltip' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/index.js 19:0-28
  × Module not found: Can't resolve './tray/Tray' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[19:14]
 17 │ export * from './Toast';
 18 │ export * from './tooltip/Tooltip';
 19 │ export * from './tray/Tray';
    ·               ─────────────
    ╰────
  help: Did you mean './tray/Tray.js'?
        
        The request './tray/Tray' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 15:0-30
  × Module not found: Can't resolve '../../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[15:19]
 13 │ import { zIndex } from '@coinbase/cds-common/tokens/zIndex';
 14 │ import { m as motion } from 'framer-motion';
 15 │ import { cx } from '../../cx';
    ·                    ──────────
 16 │ import { useA11yLabels } from '../../hooks/useA11yLabels';
 17 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ╰────
  help: Did you mean '../../cx.js'?
        
        The request '../../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 16:0-58
  × Module not found: Can't resolve '../../hooks/useA11yLabels' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[16:30]
 14 │ import { m as motion } from 'framer-motion';
 15 │ import { cx } from '../../cx';
 16 │ import { useA11yLabels } from '../../hooks/useA11yLabels';
    ·                               ───────────────────────────
 17 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 18 │ import { Box } from '../../layout';
    ╰────
  help: Did you mean '../../hooks/useA11yLabels.js'?
        
        The request '../../hooks/useA11yLabels' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 17:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[17:35]
 15 │ import { cx } from '../../cx';
 16 │ import { useA11yLabels } from '../../hooks/useA11yLabels';
 17 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ·                                    ────────────────────────────────
 18 │ import { Box } from '../../layout';
 19 │ import { VStack } from '../../layout/VStack';
    ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 18:0-35
  × Module not found: Can't resolve '../../layout' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[18:20]
 16 │ import { useA11yLabels } from '../../hooks/useA11yLabels';
 17 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 18 │ import { Box } from '../../layout';
    ·                     ──────────────
 19 │ import { VStack } from '../../layout/VStack';
 20 │ import { useMotionProps } from '../../motion/useMotionProps';
    ╰────
  help: Did you mean '../../layout/index.js'?
        
        The request '../../layout' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 19:0-45
  × Module not found: Can't resolve '../../layout/VStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[19:23]
 17 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 18 │ import { Box } from '../../layout';
 19 │ import { VStack } from '../../layout/VStack';
    ·                        ─────────────────────
 20 │ import { useMotionProps } from '../../motion/useMotionProps';
 21 │ import { media } from '../../styles/media';
    ╰────
  help: Did you mean '../../layout/VStack.js'?
        
        The request '../../layout/VStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 20:0-61
  × Module not found: Can't resolve '../../motion/useMotionProps' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[20:31]
 18 │ import { Box } from '../../layout';
 19 │ import { VStack } from '../../layout/VStack';
 20 │ import { useMotionProps } from '../../motion/useMotionProps';
    ·                                ─────────────────────────────
 21 │ import { media } from '../../styles/media';
 22 │ import { FocusTrap } from '../FocusTrap';
    ╰────
  help: Did you mean '../../motion/useMotionProps.js'?
        
        The request '../../motion/useMotionProps' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 21:0-43
  × Module not found: Can't resolve '../../styles/media' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[21:22]
 19 │ import { VStack } from '../../layout/VStack';
 20 │ import { useMotionProps } from '../../motion/useMotionProps';
 21 │ import { media } from '../../styles/media';
    ·                       ────────────────────
 22 │ import { FocusTrap } from '../FocusTrap';
 23 │ import { ModalWrapper } from './ModalWrapper';
    ╰────
  help: Did you mean '../../styles/media.js'?
        
        The request '../../styles/media' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 22:0-41
  × Module not found: Can't resolve '../FocusTrap' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[22:26]
 20 │ import { useMotionProps } from '../../motion/useMotionProps';
 21 │ import { media } from '../../styles/media';
 22 │ import { FocusTrap } from '../FocusTrap';
    ·                           ──────────────
 23 │ import { ModalWrapper } from './ModalWrapper';
 24 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../FocusTrap.js'?
        
        The request '../FocusTrap' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/Modal.js 23:0-46
  × Module not found: Can't resolve './ModalWrapper' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[23:29]
 21 │ import { media } from '../../styles/media';
 22 │ import { FocusTrap } from '../FocusTrap';
 23 │ import { ModalWrapper } from './ModalWrapper';
    ·                              ────────────────
 24 │ import { jsx as _jsx } from "react/jsx-runtime";
 25 │ const modalMaxWidth = 612;
    ╰────
  help: Did you mean './ModalWrapper.js'?
        
        The request './ModalWrapper' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/ModalBody.js 11:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[11:35]
  9 │ import React, { forwardRef, memo } from 'react';
 10 │ import { useModalContext } from '@coinbase/cds-common/overlays/ModalContext';
 11 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ·                                    ────────────────────────────────
 12 │ import { Box } from '../../layout/Box';
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/ModalBody.js 12:0-39
  × Module not found: Can't resolve '../../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[12:20]
 10 │ import { useModalContext } from '@coinbase/cds-common/overlays/ModalContext';
 11 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 12 │ import { Box } from '../../layout/Box';
    ·                     ──────────────────
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
 14 │ export const ModalBody = /*#__PURE__*/memo(/*#__PURE__*/forwardRef((_props, ref) => {
    ╰────
  help: Did you mean '../../layout/Box.js'?
        
        The request '../../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/ModalHeader.js 11:0-54
  × Module not found: Can't resolve '../../buttons/IconButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[11:27]
  9 │ import React from 'react';
 10 │ import { useModalContext } from '@coinbase/cds-common/overlays/ModalContext';
 11 │ import { IconButton } from '../../buttons/IconButton';
    ·                            ──────────────────────────
 12 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 13 │ import { Box } from '../../layout/Box';
    ╰────
  help: Did you mean '../../buttons/IconButton.js'?
        
        The request '../../buttons/IconButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/ModalHeader.js 12:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[12:35]
 10 │ import { useModalContext } from '@coinbase/cds-common/overlays/ModalContext';
 11 │ import { IconButton } from '../../buttons/IconButton';
 12 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
    ·                                    ────────────────────────────────
 13 │ import { Box } from '../../layout/Box';
 14 │ import { HStack } from '../../layout/HStack';
    ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/ModalHeader.js 13:0-39
  × Module not found: Can't resolve '../../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[13:20]
 11 │ import { IconButton } from '../../buttons/IconButton';
 12 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 13 │ import { Box } from '../../layout/Box';
    ·                     ──────────────────
 14 │ import { HStack } from '../../layout/HStack';
 15 │ import { Text } from '../../typography/Text';
    ╰────
  help: Did you mean '../../layout/Box.js'?
        
        The request '../../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/ModalHeader.js 14:0-45
  × Module not found: Can't resolve '../../layout/HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[14:23]
 12 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 13 │ import { Box } from '../../layout/Box';
 14 │ import { HStack } from '../../layout/HStack';
    ·                        ─────────────────────
 15 │ import { Text } from '../../typography/Text';
 16 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../../layout/HStack.js'?
        
        The request '../../layout/HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/modal/ModalHeader.js 15:0-45
  × Module not found: Can't resolve '../../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/modal'
    ╭─[15:21]
 13 │ import { Box } from '../../layout/Box';
 14 │ import { HStack } from '../../layout/HStack';
 15 │ import { Text } from '../../typography/Text';
    ·                      ───────────────────────
 16 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 17 │ export const ModalHeader = _props => {
    ╰────
  help: Did you mean '../../typography/Text.js'?
        
        The request '../../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/tooltip/Tooltip.js 2:0-68
  × Module not found: Can't resolve '../../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/tooltip'
   ╭─[2:35]
 1 │ import React, { cloneElement, memo, useCallback, useMemo, useRef } from 'react';
 2 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
   ·                                    ────────────────────────────────
 3 │ import { Popover } from '../popover/Popover';
 4 │ import { TooltipContent } from './TooltipContent';
   ╰────
  help: Did you mean '../../hooks/useComponentConfig.js'?
        
        The request '../../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/tooltip/Tooltip.js 3:0-45
  × Module not found: Can't resolve '../popover/Popover' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/tooltip'
   ╭─[3:24]
 1 │ import React, { cloneElement, memo, useCallback, useMemo, useRef } from 'react';
 2 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 3 │ import { Popover } from '../popover/Popover';
   ·                         ────────────────────
 4 │ import { TooltipContent } from './TooltipContent';
 5 │ import { useTooltipState } from './useTooltipState';
   ╰────
  help: Did you mean '../popover/Popover.js'?
        
        The request '../popover/Popover' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/tooltip/Tooltip.js 4:0-50
  × Module not found: Can't resolve './TooltipContent' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/tooltip'
   ╭─[4:31]
 2 │ import { useComponentConfig } from '../../hooks/useComponentConfig';
 3 │ import { Popover } from '../popover/Popover';
 4 │ import { TooltipContent } from './TooltipContent';
   ·                                ──────────────────
 5 │ import { useTooltipState } from './useTooltipState';
 6 │ import { jsx as _jsx } from "react/jsx-runtime";
   ╰────
  help: Did you mean './TooltipContent.js'?
        
        The request './TooltipContent' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/tooltip/Tooltip.js 5:0-52
  × Module not found: Can't resolve './useTooltipState' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays/tooltip'
   ╭─[5:32]
 3 │ import { Popover } from '../popover/Popover';
 4 │ import { TooltipContent } from './TooltipContent';
 5 │ import { useTooltipState } from './useTooltipState';
   ·                                 ───────────────────
 6 │ import { jsx as _jsx } from "react/jsx-runtime";
 7 │ const preventMouseDown = event => {
   ╰────
  help: Did you mean './useTooltipState.js'?
        
        The request './useTooltipState' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/overlays/useToast.js 9:0-32
  × Module not found: Can't resolve './Toast' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/overlays'
    ╭─[9:22]
  7 │ import { ToastContext } from '@coinbase/cds-common/overlays/ToastProvider';
  8 │ import { charsThreshold, defaultDuration, perCharsDuration, withActionDuration } from '@coinbase/cds-common/tokens/toast';
  9 │ import { Toast } from './Toast';
    ·                       ─────────
 10 │ import { jsx as _jsx } from "react/jsx-runtime";
 11 │ export const useToast = () => {
    ╰────
  help: Did you mean './Toast.js'?
        
        The request './Toast' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/page/index.js 1:0-29
  × Module not found: Can't resolve './PageFooter' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/page'
   ╭─[1:14]
 1 │ export * from './PageFooter';
   ·               ──────────────
 2 │ export * from './PageHeader';
   ╰────
  help: Did you mean './PageFooter.js'?
        
        The request './PageFooter' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/page/index.js 2:0-29
  × Module not found: Can't resolve './PageHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/page'
   ╭─[2:14]
 1 │ export * from './PageFooter';
 2 │ export * from './PageHeader';
   ·               ──────────────
   ╰────
  help: Did you mean './PageHeader.js'?
        
        The request './PageHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/pagination/index.js 2:0-44
  × Module not found: Can't resolve './DefaultPaginationEllipsis' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/pagination'
   ╭─[2:14]
 1 │ // codegen:start {preset: barrel, include: ./*.tsx, exclude: ./*.stories.tsx}
 2 │ export * from './DefaultPaginationEllipsis';
   ·               ─────────────────────────────
 3 │ export * from './DefaultPaginationNavigationButton';
 4 │ export * from './DefaultPaginationNavigationTextButton';
   ╰────
  help: Did you mean './DefaultPaginationEllipsis.js'?
        
        The request './DefaultPaginationEllipsis' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/pagination/index.js 3:0-52
  × Module not found: Can't resolve './DefaultPaginationNavigationButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/pagination'
   ╭─[3:14]
 1 │ // codegen:start {preset: barrel, include: ./*.tsx, exclude: ./*.stories.tsx}
 2 │ export * from './DefaultPaginationEllipsis';
 3 │ export * from './DefaultPaginationNavigationButton';
   ·               ─────────────────────────────────────
 4 │ export * from './DefaultPaginationNavigationTextButton';
 5 │ export * from './DefaultPaginationPageButton';
   ╰────
  help: Did you mean './DefaultPaginationNavigationButton.js'?
        
        The request './DefaultPaginationNavigationButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/pagination/index.js 4:0-56
  × Module not found: Can't resolve './DefaultPaginationNavigationTextButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/pagination'
   ╭─[4:14]
 2 │ export * from './DefaultPaginationEllipsis';
 3 │ export * from './DefaultPaginationNavigationButton';
 4 │ export * from './DefaultPaginationNavigationTextButton';
   ·               ─────────────────────────────────────────
 5 │ export * from './DefaultPaginationPageButton';
 6 │ export * from './Pagination';
   ╰────
  help: Did you mean './DefaultPaginationNavigationTextButton.js'?
        
        The request './DefaultPaginationNavigationTextButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/pagination/index.js 5:0-46
  × Module not found: Can't resolve './DefaultPaginationPageButton' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/pagination'
   ╭─[5:14]
 3 │ export * from './DefaultPaginationNavigationButton';
 4 │ export * from './DefaultPaginationNavigationTextButton';
 5 │ export * from './DefaultPaginationPageButton';
   ·               ───────────────────────────────
 6 │ export * from './Pagination';
 7 │ // codegen:end
   ╰────
  help: Did you mean './DefaultPaginationPageButton.js'?
        
        The request './DefaultPaginationPageButton' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/pagination/index.js 6:0-29
  × Module not found: Can't resolve './Pagination' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/pagination'
   ╭─[6:14]
 4 │ export * from './DefaultPaginationNavigationTextButton';
 5 │ export * from './DefaultPaginationPageButton';
 6 │ export * from './Pagination';
   ·               ──────────────
 7 │ // codegen:end
 8 │ 
   ╰────
  help: Did you mean './Pagination.js'?
        
        The request './Pagination' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/pagination/index.js 9:0-32
  × Module not found: Can't resolve './usePagination' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/pagination'
   ╭─[9:14]
 7 │ // codegen:end
 8 │ 
 9 │ export * from './usePagination';
   ·               ─────────────────
   ╰────
  help: Did you mean './usePagination.js'?
        
        The request './usePagination' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/section-header/index.js 1:0-32
  × Module not found: Can't resolve './SectionHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/section-header'
   ╭────
 1 │ export * from './SectionHeader';
   ·               ─────────────────
   ╰────
  help: Did you mean './SectionHeader.js'?
        
        The request './SectionHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 2:0-49
  × Module not found: Can't resolve './DefaultStepperHeaderHorizontal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
   ╭─[2:14]
 1 │ // codegen:start {preset: barrel, include: ./*.tsx, exclude: ./*.stories.tsx}
 2 │ export * from './DefaultStepperHeaderHorizontal';
   ·               ──────────────────────────────────
 3 │ export * from './DefaultStepperIconVertical';
 4 │ export * from './DefaultStepperLabelHorizontal';
   ╰────
  help: Did you mean './DefaultStepperHeaderHorizontal.js'?
        
        The request './DefaultStepperHeaderHorizontal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 3:0-45
  × Module not found: Can't resolve './DefaultStepperIconVertical' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
   ╭─[3:14]
 1 │ // codegen:start {preset: barrel, include: ./*.tsx, exclude: ./*.stories.tsx}
 2 │ export * from './DefaultStepperHeaderHorizontal';
 3 │ export * from './DefaultStepperIconVertical';
   ·               ──────────────────────────────
 4 │ export * from './DefaultStepperLabelHorizontal';
 5 │ export * from './DefaultStepperLabelVertical';
   ╰────
  help: Did you mean './DefaultStepperIconVertical.js'?
        
        The request './DefaultStepperIconVertical' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 4:0-48
  × Module not found: Can't resolve './DefaultStepperLabelHorizontal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
   ╭─[4:14]
 2 │ export * from './DefaultStepperHeaderHorizontal';
 3 │ export * from './DefaultStepperIconVertical';
 4 │ export * from './DefaultStepperLabelHorizontal';
   ·               ─────────────────────────────────
 5 │ export * from './DefaultStepperLabelVertical';
 6 │ export * from './DefaultStepperProgressHorizontal';
   ╰────
  help: Did you mean './DefaultStepperLabelHorizontal.js'?
        
        The request './DefaultStepperLabelHorizontal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 5:0-46
  × Module not found: Can't resolve './DefaultStepperLabelVertical' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
   ╭─[5:14]
 3 │ export * from './DefaultStepperIconVertical';
 4 │ export * from './DefaultStepperLabelHorizontal';
 5 │ export * from './DefaultStepperLabelVertical';
   ·               ───────────────────────────────
 6 │ export * from './DefaultStepperProgressHorizontal';
 7 │ export * from './DefaultStepperProgressVertical';
   ╰────
  help: Did you mean './DefaultStepperLabelVertical.js'?
        
        The request './DefaultStepperLabelVertical' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 6:0-51
  × Module not found: Can't resolve './DefaultStepperProgressHorizontal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
   ╭─[6:14]
 4 │ export * from './DefaultStepperLabelHorizontal';
 5 │ export * from './DefaultStepperLabelVertical';
 6 │ export * from './DefaultStepperProgressHorizontal';
   ·               ────────────────────────────────────
 7 │ export * from './DefaultStepperProgressVertical';
 8 │ export * from './DefaultStepperStepHorizontal';
   ╰────
  help: Did you mean './DefaultStepperProgressHorizontal.js'?
        
        The request './DefaultStepperProgressHorizontal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 7:0-49
  × Module not found: Can't resolve './DefaultStepperProgressVertical' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
   ╭─[7:14]
 5 │ export * from './DefaultStepperLabelVertical';
 6 │ export * from './DefaultStepperProgressHorizontal';
 7 │ export * from './DefaultStepperProgressVertical';
   ·               ──────────────────────────────────
 8 │ export * from './DefaultStepperStepHorizontal';
 9 │ export * from './DefaultStepperStepVertical';
   ╰────
  help: Did you mean './DefaultStepperProgressVertical.js'?
        
        The request './DefaultStepperProgressVertical' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 8:0-47
  × Module not found: Can't resolve './DefaultStepperStepHorizontal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
    ╭─[8:14]
  6 │ export * from './DefaultStepperProgressHorizontal';
  7 │ export * from './DefaultStepperProgressVertical';
  8 │ export * from './DefaultStepperStepHorizontal';
    ·               ────────────────────────────────
  9 │ export * from './DefaultStepperStepVertical';
 10 │ export * from './DefaultStepperSubstepContainerHorizontal';
    ╰────
  help: Did you mean './DefaultStepperStepHorizontal.js'?
        
        The request './DefaultStepperStepHorizontal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 9:0-45
  × Module not found: Can't resolve './DefaultStepperStepVertical' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
    ╭─[9:14]
  7 │ export * from './DefaultStepperProgressVertical';
  8 │ export * from './DefaultStepperStepHorizontal';
  9 │ export * from './DefaultStepperStepVertical';
    ·               ──────────────────────────────
 10 │ export * from './DefaultStepperSubstepContainerHorizontal';
 11 │ export * from './DefaultStepperSubstepContainerVertical';
    ╰────
  help: Did you mean './DefaultStepperStepVertical.js'?
        
        The request './DefaultStepperStepVertical' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 10:0-59
  × Module not found: Can't resolve './DefaultStepperSubstepContainerHorizontal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
    ╭─[10:14]
  8 │ export * from './DefaultStepperStepHorizontal';
  9 │ export * from './DefaultStepperStepVertical';
 10 │ export * from './DefaultStepperSubstepContainerHorizontal';
    ·               ────────────────────────────────────────────
 11 │ export * from './DefaultStepperSubstepContainerVertical';
 12 │ export * from './Stepper';
    ╰────
  help: Did you mean './DefaultStepperSubstepContainerHorizontal.js'?
        
        The request './DefaultStepperSubstepContainerHorizontal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 11:0-57
  × Module not found: Can't resolve './DefaultStepperSubstepContainerVertical' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
    ╭─[11:14]
  9 │ export * from './DefaultStepperStepVertical';
 10 │ export * from './DefaultStepperSubstepContainerHorizontal';
 11 │ export * from './DefaultStepperSubstepContainerVertical';
    ·               ──────────────────────────────────────────
 12 │ export * from './Stepper';
 13 │ // codegen:end
    ╰────
  help: Did you mean './DefaultStepperSubstepContainerVertical.js'?
        
        The request './DefaultStepperSubstepContainerVertical' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/stepper/index.js 12:0-26
  × Module not found: Can't resolve './Stepper' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/stepper'
    ╭─[12:14]
 10 │ export * from './DefaultStepperSubstepContainerHorizontal';
 11 │ export * from './DefaultStepperSubstepContainerVertical';
 12 │ export * from './Stepper';
    ·               ───────────
 13 │ // codegen:end
    ╰────
  help: Did you mean './Stepper.js'?
        
        The request './Stepper' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/MediaQueryProvider.js 2:0-46
  × Module not found: Can't resolve '../styles/media' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[2:28]
 1 │ import React, { createContext, useState } from 'react';
 2 │ import { breakpoints } from '../styles/media';
   ·                             ─────────────────
 3 │ import { addMediaQueryListener, removeMediaQueryListener } from '../utils/mediaQueryListener';
 4 │ import { jsx as _jsx } from "react/jsx-runtime";
   ╰────
  help: Did you mean '../styles/media.js'?
        
        The request '../styles/media' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/MediaQueryProvider.js 3:0-94
  × Module not found: Can't resolve '../utils/mediaQueryListener' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[3:64]
 1 │ import React, { createContext, useState } from 'react';
 2 │ import { breakpoints } from '../styles/media';
 3 │ import { addMediaQueryListener, removeMediaQueryListener } from '../utils/mediaQueryListener';
   ·                                                                 ─────────────────────────────
 4 │ import { jsx as _jsx } from "react/jsx-runtime";
 5 │ export const cdsDefaultValues = {
   ╰────
  help: Did you mean '../utils/mediaQueryListener.js'?
        
        The request '../utils/mediaQueryListener' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/Pressable.js 11:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[11:19]
  9 │ import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
 10 │ import { useEventHandler } from '@coinbase/cds-common/hooks/useEventHandler';
 11 │ import { cx } from '../cx';
    ·                    ───────
 12 │ import { useIsoEffect } from '../hooks/useIsoEffect';
 13 │ import { Interactable } from './Interactable';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/Pressable.js 12:0-53
  × Module not found: Can't resolve '../hooks/useIsoEffect' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[12:29]
 10 │ import { useEventHandler } from '@coinbase/cds-common/hooks/useEventHandler';
 11 │ import { cx } from '../cx';
 12 │ import { useIsoEffect } from '../hooks/useIsoEffect';
    ·                              ───────────────────────
 13 │ import { Interactable } from './Interactable';
 14 │ import { interactablePressedBackground, interactablePressedOpacity } from './interactableCSSProperties';
    ╰────
  help: Did you mean '../hooks/useIsoEffect.js'?
        
        The request '../hooks/useIsoEffect' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/Pressable.js 13:0-46
  × Module not found: Can't resolve './Interactable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[13:29]
 11 │ import { cx } from '../cx';
 12 │ import { useIsoEffect } from '../hooks/useIsoEffect';
 13 │ import { Interactable } from './Interactable';
    ·                              ────────────────
 14 │ import { interactablePressedBackground, interactablePressedOpacity } from './interactableCSSProperties';
 15 │ import { getTabIndex, handleButtonFocusOnSafariOrFirefoxOnMac, isNativeClick, isNativeTabbable, supportsDisabledAttribute } from './reakit-utils';
    ╰────
  help: Did you mean './Interactable.js'?
        
        The request './Interactable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/Pressable.js 14:0-104
  × Module not found: Can't resolve './interactableCSSProperties' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[14:74]
 12 │ import { useIsoEffect } from '../hooks/useIsoEffect';
 13 │ import { Interactable } from './Interactable';
 14 │ import { interactablePressedBackground, interactablePressedOpacity } from './interactableCSSProperties';
    ·                                                                           ─────────────────────────────
 15 │ import { getTabIndex, handleButtonFocusOnSafariOrFirefoxOnMac, isNativeClick, isNativeTabbable, supportsDisabledAttribute } from './reakit-utils';
 16 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean './interactableCSSProperties.js'?
        
        The request './interactableCSSProperties' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/Pressable.js 15:0-146
  × Module not found: Can't resolve './reakit-utils' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[15:129]
 13 │ import { Interactable } from './Interactable';
 14 │ import { interactablePressedBackground, interactablePressedOpacity } from './interactableCSSProperties';
 15 │ import { getTabIndex, handleButtonFocusOnSafariOrFirefoxOnMac, isNativeClick, isNativeTabbable, supportsDisabledAttribute } from './reakit-utils';
    ·                                                                                                                                  ────────────────
 16 │ import { jsx as _jsx } from "react/jsx-runtime";
 17 │ const scaledDownCss = "scaledDownCss-s1o6alxd";
    ╰────
  help: Did you mean './reakit-utils.js'?
        
        The request './reakit-utils' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/ThemeProvider.js 8:0-64
  × Module not found: Can't resolve '../core/createThemeCssVars' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[8:35]
  6 │ /* eslint-disable @typescript-eslint/no-empty-object-type */
  7 │ import React, { createContext, memo, useContext, useMemo } from 'react';
  8 │ import { createThemeCssVars } from '../core/createThemeCssVars';
    ·                                    ────────────────────────────
  9 │ import { cx } from '../cx';
 10 │ import { FramerMotionProvider } from './FramerMotionProvider';
    ╰────
  help: Did you mean '../core/createThemeCssVars.js'?
        
        The request '../core/createThemeCssVars' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/ThemeProvider.js 9:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[9:19]
  7 │ import React, { createContext, memo, useContext, useMemo } from 'react';
  8 │ import { createThemeCssVars } from '../core/createThemeCssVars';
  9 │ import { cx } from '../cx';
    ·                    ───────
 10 │ import { FramerMotionProvider } from './FramerMotionProvider';
 11 │ 
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/ThemeProvider.js 10:0-62
  × Module not found: Can't resolve './FramerMotionProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
    ╭─[10:37]
  8 │ import { createThemeCssVars } from '../core/createThemeCssVars';
  9 │ import { cx } from '../cx';
 10 │ import { FramerMotionProvider } from './FramerMotionProvider';
    ·                                      ────────────────────────
 11 │ 
 12 │ /* Augments csstype's Properties by adding all our theme CSS variable names. Effectively adds all theme CSS variable names as valid keys to React.CSSProperties. */
    ╰────
  help: Did you mean './FramerMotionProvider.js'?
        
        The request './FramerMotionProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/index.js 1:0-42
  × Module not found: Can't resolve './ComponentConfigProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[1:14]
 1 │ export * from './ComponentConfigProvider';
   ·               ───────────────────────────
 2 │ export * from './EventHandlerProvider';
 3 │ export * from './Interactable';
   ╰────
  help: Did you mean './ComponentConfigProvider.js'?
        
        The request './ComponentConfigProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/index.js 2:0-39
  × Module not found: Can't resolve './EventHandlerProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[2:14]
 1 │ export * from './ComponentConfigProvider';
 2 │ export * from './EventHandlerProvider';
   ·               ────────────────────────
 3 │ export * from './Interactable';
 4 │ export * from './MediaQueryProvider';
   ╰────
  help: Did you mean './EventHandlerProvider.js'?
        
        The request './EventHandlerProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/index.js 3:0-31
  × Module not found: Can't resolve './Interactable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[3:14]
 1 │ export * from './ComponentConfigProvider';
 2 │ export * from './EventHandlerProvider';
 3 │ export * from './Interactable';
   ·               ────────────────
 4 │ export * from './MediaQueryProvider';
 5 │ export * from './Pressable';
   ╰────
  help: Did you mean './Interactable.js'?
        
        The request './Interactable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/index.js 4:0-37
  × Module not found: Can't resolve './MediaQueryProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[4:14]
 2 │ export * from './EventHandlerProvider';
 3 │ export * from './Interactable';
 4 │ export * from './MediaQueryProvider';
   ·               ──────────────────────
 5 │ export * from './Pressable';
 6 │ export * from './PressableOpacity';
   ╰────
  help: Did you mean './MediaQueryProvider.js'?
        
        The request './MediaQueryProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/index.js 5:0-28
  × Module not found: Can't resolve './Pressable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[5:14]
 3 │ export * from './Interactable';
 4 │ export * from './MediaQueryProvider';
 5 │ export * from './Pressable';
   ·               ─────────────
 6 │ export * from './PressableOpacity';
 7 │ export * from './ThemeProvider';
   ╰────
  help: Did you mean './Pressable.js'?
        
        The request './Pressable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/index.js 6:0-35
  × Module not found: Can't resolve './PressableOpacity' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[6:14]
 4 │ export * from './MediaQueryProvider';
 5 │ export * from './Pressable';
 6 │ export * from './PressableOpacity';
   ·               ────────────────────
 7 │ export * from './ThemeProvider';
   ╰────
  help: Did you mean './PressableOpacity.js'?
        
        The request './PressableOpacity' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/system/index.js 7:0-32
  × Module not found: Can't resolve './ThemeProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/system'
   ╭─[7:14]
 5 │ export * from './Pressable';
 6 │ export * from './PressableOpacity';
 7 │ export * from './ThemeProvider';
   ·               ─────────────────
   ╰────
  help: Did you mean './ThemeProvider.js'?
        
        The request './ThemeProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/hooks/useSortableCell.js 2:0-57
  × Module not found: Can't resolve '../TableCellSortIcon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables/hooks'
   ╭─[2:34]
 1 │ import React from 'react';
 2 │ import { TableCellSortIcon } from '../TableCellSortIcon';
   ·                                   ──────────────────────
 3 │ import { jsx as _jsx } from "react/jsx-runtime";
 4 │ export const useSortableCell = _ref => {
   ╰────
  help: Did you mean '../TableCellSortIcon.js'?
        
        The request '../TableCellSortIcon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 1:0-24
  × Module not found: Can't resolve './Table' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[1:14]
 1 │ export * from './Table';
   ·               ─────────
 2 │ export * from './TableBody';
 3 │ export * from './TableCaption';
   ╰────
  help: Did you mean './Table.js'?
        
        The request './Table' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 2:0-28
  × Module not found: Can't resolve './TableBody' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[2:14]
 1 │ export * from './Table';
 2 │ export * from './TableBody';
   ·               ─────────────
 3 │ export * from './TableCaption';
 4 │ export * from './TableCell';
   ╰────
  help: Did you mean './TableBody.js'?
        
        The request './TableBody' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 3:0-31
  × Module not found: Can't resolve './TableCaption' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[3:14]
 1 │ export * from './Table';
 2 │ export * from './TableBody';
 3 │ export * from './TableCaption';
   ·               ────────────────
 4 │ export * from './TableCell';
 5 │ export * from './TableCellFallback';
   ╰────
  help: Did you mean './TableCaption.js'?
        
        The request './TableCaption' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 4:0-28
  × Module not found: Can't resolve './TableCell' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[4:14]
 2 │ export * from './TableBody';
 3 │ export * from './TableCaption';
 4 │ export * from './TableCell';
   ·               ─────────────
 5 │ export * from './TableCellFallback';
 6 │ export * from './TableFooter';
   ╰────
  help: Did you mean './TableCell.js'?
        
        The request './TableCell' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 5:0-36
  × Module not found: Can't resolve './TableCellFallback' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[5:14]
 3 │ export * from './TableCaption';
 4 │ export * from './TableCell';
 5 │ export * from './TableCellFallback';
   ·               ─────────────────────
 6 │ export * from './TableFooter';
 7 │ export * from './TableHeader';
   ╰────
  help: Did you mean './TableCellFallback.js'?
        
        The request './TableCellFallback' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 6:0-30
  × Module not found: Can't resolve './TableFooter' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[6:14]
 4 │ export * from './TableCell';
 5 │ export * from './TableCellFallback';
 6 │ export * from './TableFooter';
   ·               ───────────────
 7 │ export * from './TableHeader';
 8 │ export * from './TableRow';
   ╰────
  help: Did you mean './TableFooter.js'?
        
        The request './TableFooter' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 7:0-30
  × Module not found: Can't resolve './TableHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[7:14]
 5 │ export * from './TableCellFallback';
 6 │ export * from './TableFooter';
 7 │ export * from './TableHeader';
   ·               ───────────────
 8 │ export * from './TableRow';
   ╰────
  help: Did you mean './TableHeader.js'?
        
        The request './TableHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tables/index.js 8:0-27
  × Module not found: Can't resolve './TableRow' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tables'
   ╭─[8:14]
 6 │ export * from './TableFooter';
 7 │ export * from './TableHeader';
 8 │ export * from './TableRow';
   ·               ────────────
   ╰────
  help: Did you mean './TableRow.js'?
        
        The request './TableRow' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/SegmentedTabs.js 10:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[10:19]
  8 │ function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
  9 │ import React, { forwardRef, memo } from 'react';
 10 │ import { cx } from '../cx';
    ·                    ───────
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { SegmentedTab } from './SegmentedTab';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/SegmentedTabs.js 11:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[11:35]
  9 │ import React, { forwardRef, memo } from 'react';
 10 │ import { cx } from '../cx';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 12 │ import { SegmentedTab } from './SegmentedTab';
 13 │ import { SegmentedTabsActiveIndicator } from './SegmentedTabsActiveIndicator';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/SegmentedTabs.js 12:0-46
  × Module not found: Can't resolve './SegmentedTab' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[12:29]
 10 │ import { cx } from '../cx';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { SegmentedTab } from './SegmentedTab';
    ·                              ────────────────
 13 │ import { SegmentedTabsActiveIndicator } from './SegmentedTabsActiveIndicator';
 14 │ import { Tabs } from './Tabs';
    ╰────
  help: Did you mean './SegmentedTab.js'?
        
        The request './SegmentedTab' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/SegmentedTabs.js 13:0-78
  × Module not found: Can't resolve './SegmentedTabsActiveIndicator' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[13:45]
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { SegmentedTab } from './SegmentedTab';
 13 │ import { SegmentedTabsActiveIndicator } from './SegmentedTabsActiveIndicator';
    ·                                              ────────────────────────────────
 14 │ import { Tabs } from './Tabs';
 15 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean './SegmentedTabsActiveIndicator.js'?
        
        The request './SegmentedTabsActiveIndicator' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/SegmentedTabs.js 14:0-30
  × Module not found: Can't resolve './Tabs' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[14:21]
 12 │ import { SegmentedTab } from './SegmentedTab';
 13 │ import { SegmentedTabsActiveIndicator } from './SegmentedTabsActiveIndicator';
 14 │ import { Tabs } from './Tabs';
    ·                      ────────
 15 │ import { jsx as _jsx } from "react/jsx-runtime";
 16 │ const SegmentedTabsComponent = /*#__PURE__*/memo(/*#__PURE__*/forwardRef((_props, ref) => {
    ╰────
  help: Did you mean './Tabs.js'?
        
        The request './Tabs' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/Tabs.js 20:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[20:19]
 18 │ import { defaultRect } from '@coinbase/cds-common/types/Rect';
 19 │ import { m as motion } from 'framer-motion';
 20 │ import { cx } from '../cx';
    ·                    ───────
 21 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 22 │ import { Box } from '../layout/Box';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/Tabs.js 21:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[21:35]
 19 │ import { m as motion } from 'framer-motion';
 20 │ import { cx } from '../cx';
 21 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 22 │ import { Box } from '../layout/Box';
 23 │ import { HStack } from '../layout/HStack';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/Tabs.js 22:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[22:20]
 20 │ import { cx } from '../cx';
 21 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 22 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 23 │ import { HStack } from '../layout/HStack';
 24 │ import { DefaultTab } from './DefaultTab';
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/Tabs.js 23:0-42
  × Module not found: Can't resolve '../layout/HStack' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[23:23]
 21 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 22 │ import { Box } from '../layout/Box';
 23 │ import { HStack } from '../layout/HStack';
    ·                        ──────────────────
 24 │ import { DefaultTab } from './DefaultTab';
 25 │ import { DefaultTabsActiveIndicator } from './DefaultTabsActiveIndicator';
    ╰────
  help: Did you mean '../layout/HStack.js'?
        
        The request '../layout/HStack' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/Tabs.js 24:0-42
  × Module not found: Can't resolve './DefaultTab' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[24:27]
 22 │ import { Box } from '../layout/Box';
 23 │ import { HStack } from '../layout/HStack';
 24 │ import { DefaultTab } from './DefaultTab';
    ·                            ──────────────
 25 │ import { DefaultTabsActiveIndicator } from './DefaultTabsActiveIndicator';
 26 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean './DefaultTab.js'?
        
        The request './DefaultTab' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/Tabs.js 25:0-74
  × Module not found: Can't resolve './DefaultTabsActiveIndicator' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
    ╭─[25:43]
 23 │ import { HStack } from '../layout/HStack';
 24 │ import { DefaultTab } from './DefaultTab';
 25 │ import { DefaultTabsActiveIndicator } from './DefaultTabsActiveIndicator';
    ·                                            ──────────────────────────────
 26 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 27 │ const MotionBox = motion(Box);
    ╰────
  help: Did you mean './DefaultTabsActiveIndicator.js'?
        
        The request './DefaultTabsActiveIndicator' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/Tabs.js
  × ESModulesLinkingError: export 'useMergeRefs' (imported as 'useMergeRefs') was not found in '@coinbase/cds-common/hooks/useMergeRefs' (module has no exports)
    ╭─[85:30]
 83 │     debounce: 20
 84 │   });
 85 │   const mergedContainerRefs = useMergeRefs(ref, tabsContainerRef);
    ·                               ────────────
 86 │   const refMap = useRefMap();
 87 │   const activeTabRect = useMemo(() => {
    ╰────
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 1:0-29
  × Module not found: Can't resolve './DefaultTab' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[1:14]
 1 │ export * from './DefaultTab';
   ·               ──────────────
 2 │ export * from './DefaultTabsActiveIndicator';
 3 │ export * from './Paddle';
   ╰────
  help: Did you mean './DefaultTab.js'?
        
        The request './DefaultTab' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 2:0-45
  × Module not found: Can't resolve './DefaultTabsActiveIndicator' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[2:14]
 1 │ export * from './DefaultTab';
 2 │ export * from './DefaultTabsActiveIndicator';
   ·               ──────────────────────────────
 3 │ export * from './Paddle';
 4 │ export * from './SegmentedTab';
   ╰────
  help: Did you mean './DefaultTabsActiveIndicator.js'?
        
        The request './DefaultTabsActiveIndicator' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 3:0-25
  × Module not found: Can't resolve './Paddle' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[3:14]
 1 │ export * from './DefaultTab';
 2 │ export * from './DefaultTabsActiveIndicator';
 3 │ export * from './Paddle';
   ·               ──────────
 4 │ export * from './SegmentedTab';
 5 │ export * from './SegmentedTabs';
   ╰────
  help: Did you mean './Paddle.js'?
        
        The request './Paddle' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 4:0-31
  × Module not found: Can't resolve './SegmentedTab' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[4:14]
 2 │ export * from './DefaultTabsActiveIndicator';
 3 │ export * from './Paddle';
 4 │ export * from './SegmentedTab';
   ·               ────────────────
 5 │ export * from './SegmentedTabs';
 6 │ export * from './TabIndicator';
   ╰────
  help: Did you mean './SegmentedTab.js'?
        
        The request './SegmentedTab' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 5:0-32
  × Module not found: Can't resolve './SegmentedTabs' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[5:14]
 3 │ export * from './Paddle';
 4 │ export * from './SegmentedTab';
 5 │ export * from './SegmentedTabs';
   ·               ─────────────────
 6 │ export * from './TabIndicator';
 7 │ export * from './TabLabel';
   ╰────
  help: Did you mean './SegmentedTabs.js'?
        
        The request './SegmentedTabs' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 6:0-31
  × Module not found: Can't resolve './TabIndicator' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[6:14]
 4 │ export * from './SegmentedTab';
 5 │ export * from './SegmentedTabs';
 6 │ export * from './TabIndicator';
   ·               ────────────────
 7 │ export * from './TabLabel';
 8 │ export * from './TabNavigation';
   ╰────
  help: Did you mean './TabIndicator.js'?
        
        The request './TabIndicator' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 7:0-27
  × Module not found: Can't resolve './TabLabel' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[7:14]
 5 │ export * from './SegmentedTabs';
 6 │ export * from './TabIndicator';
 7 │ export * from './TabLabel';
   ·               ────────────
 8 │ export * from './TabNavigation';
 9 │ export * from './Tabs';
   ╰────
  help: Did you mean './TabLabel.js'?
        
        The request './TabLabel' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 8:0-32
  × Module not found: Can't resolve './TabNavigation' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[8:14]
 6 │ export * from './TabIndicator';
 7 │ export * from './TabLabel';
 8 │ export * from './TabNavigation';
   ·               ─────────────────
 9 │ export * from './Tabs';
   ╰────
  help: Did you mean './TabNavigation.js'?
        
        The request './TabNavigation' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tabs/index.js 9:0-23
  × Module not found: Can't resolve './Tabs' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tabs'
   ╭─[9:14]
 7 │ export * from './TabLabel';
 8 │ export * from './TabNavigation';
 9 │ export * from './Tabs';
   ·               ────────
   ╰────
  help: Did you mean './Tabs.js'?
        
        The request './Tabs' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tag/Tag.js 11:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tag'
    ╭─[11:35]
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { tagBorderRadiusMap, tagEmphasisColorMap, tagFontMap, tagHorizontalSpacing } from '@coinbase/cds-common/tokens/tags';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 12 │ import { useTheme } from '../hooks/useTheme';
 13 │ import { Icon } from '../icons/Icon';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tag/Tag.js 12:0-45
  × Module not found: Can't resolve '../hooks/useTheme' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tag'
    ╭─[12:25]
 10 │ import { tagBorderRadiusMap, tagEmphasisColorMap, tagFontMap, tagHorizontalSpacing } from '@coinbase/cds-common/tokens/tags';
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { useTheme } from '../hooks/useTheme';
    ·                          ───────────────────
 13 │ import { Icon } from '../icons/Icon';
 14 │ import { Box } from '../layout/Box';
    ╰────
  help: Did you mean '../hooks/useTheme.js'?
        
        The request '../hooks/useTheme' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tag/Tag.js 13:0-37
  × Module not found: Can't resolve '../icons/Icon' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tag'
    ╭─[13:21]
 11 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 12 │ import { useTheme } from '../hooks/useTheme';
 13 │ import { Icon } from '../icons/Icon';
    ·                      ───────────────
 14 │ import { Box } from '../layout/Box';
 15 │ import { Text } from '../typography/Text';
    ╰────
  help: Did you mean '../icons/Icon.js'?
        
        The request '../icons/Icon' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tag/Tag.js 14:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tag'
    ╭─[14:20]
 12 │ import { useTheme } from '../hooks/useTheme';
 13 │ import { Icon } from '../icons/Icon';
 14 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 15 │ import { Text } from '../typography/Text';
 16 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tag/Tag.js 15:0-42
  × Module not found: Can't resolve '../typography/Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tag'
    ╭─[15:21]
 13 │ import { Icon } from '../icons/Icon';
 14 │ import { Box } from '../layout/Box';
 15 │ import { Text } from '../typography/Text';
    ·                      ────────────────────
 16 │ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
 17 │ const nodeCss = "nodeCss-n1hf567u";
    ╰────
  help: Did you mean '../typography/Text.js'?
        
        The request '../typography/Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tag/index.js 1:0-22
  × Module not found: Can't resolve './Tag' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tag'
   ╭────
 1 │ export * from './Tag';
   ·               ───────
   ╰────
  help: Did you mean './Tag.js'?
        
        The request './Tag' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tour/index.js 1:0-34
  × Module not found: Can't resolve './DefaultTourMask' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tour'
   ╭─[1:14]
 1 │ export * from './DefaultTourMask';
   ·               ───────────────────
 2 │ export * from './DefaultTourStepArrow';
 3 │ export * from './Tour';
   ╰────
  help: Did you mean './DefaultTourMask.js'?
        
        The request './DefaultTourMask' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tour/index.js 2:0-39
  × Module not found: Can't resolve './DefaultTourStepArrow' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tour'
   ╭─[2:14]
 1 │ export * from './DefaultTourMask';
 2 │ export * from './DefaultTourStepArrow';
   ·               ────────────────────────
 3 │ export * from './Tour';
 4 │ export * from './TourStep';
   ╰────
  help: Did you mean './DefaultTourStepArrow.js'?
        
        The request './DefaultTourStepArrow' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tour/index.js 3:0-23
  × Module not found: Can't resolve './Tour' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tour'
   ╭─[3:14]
 1 │ export * from './DefaultTourMask';
 2 │ export * from './DefaultTourStepArrow';
 3 │ export * from './Tour';
   ·               ────────
 4 │ export * from './TourStep';
   ╰────
  help: Did you mean './Tour.js'?
        
        The request './Tour' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/tour/index.js 4:0-27
  × Module not found: Can't resolve './TourStep' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/tour'
   ╭─[4:14]
 2 │ export * from './DefaultTourStepArrow';
 3 │ export * from './Tour';
 4 │ export * from './TourStep';
   ·               ────────────
   ╰────
  help: Did you mean './TourStep.js'?
        
        The request './TourStep' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/Link.js 11:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[11:19]
  9 │ import React, { forwardRef, memo, useRef } from 'react';
 10 │ import { useMergeRefs } from '@coinbase/cds-common/hooks/useMergeRefs';
 11 │ import { cx } from '../cx';
    ·                    ───────
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { Pressable } from '../system/Pressable';
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/Link.js 12:0-65
  × Module not found: Can't resolve '../hooks/useComponentConfig' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[12:35]
 10 │ import { useMergeRefs } from '@coinbase/cds-common/hooks/useMergeRefs';
 11 │ import { cx } from '../cx';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
    ·                                    ─────────────────────────────
 13 │ import { Pressable } from '../system/Pressable';
 14 │ import { Text } from './Text';
    ╰────
  help: Did you mean '../hooks/useComponentConfig.js'?
        
        The request '../hooks/useComponentConfig' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/Link.js 13:0-48
  × Module not found: Can't resolve '../system/Pressable' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[13:26]
 11 │ import { cx } from '../cx';
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { Pressable } from '../system/Pressable';
    ·                           ─────────────────────
 14 │ import { Text } from './Text';
 15 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../system/Pressable.js'?
        
        The request '../system/Pressable' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/Link.js 14:0-30
  × Module not found: Can't resolve './Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[14:21]
 12 │ import { useComponentConfig } from '../hooks/useComponentConfig';
 13 │ import { Pressable } from '../system/Pressable';
 14 │ import { Text } from './Text';
    ·                      ────────
 15 │ import { jsx as _jsx } from "react/jsx-runtime";
 16 │ export const linkDefaultElement = 'a';
    ╰────
  help: Did you mean './Text.js'?
        
        The request './Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/Link.js
  × ESModulesLinkingError: export 'useMergeRefs' (imported as 'useMergeRefs') was not found in '@coinbase/cds-common/hooks/useMergeRefs' (module has no exports)
    ╭─[41:20]
 39 │   const isAnchor = Component === 'a';
 40 │   const linkRef = useRef(null);
 41 │   const mergedRef = useMergeRefs(ref, linkRef);
    ·                     ────────────
 42 │   return /*#__PURE__*/_jsx(Pressable, _objectSpread(_objectSpread({
 43 │     ref: mergedRef,
    ╰────
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/Text.js 11:0-27
  × Module not found: Can't resolve '../cx' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[11:19]
  9 │ import React, { forwardRef, memo, useMemo } from 'react';
 10 │ import { accessibleOpacityDisabled } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { cx } from '../cx';
    ·                    ───────
 12 │ import { Box } from '../layout/Box';
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
    ╰────
  help: Did you mean '../cx.js'?
        
        The request '../cx' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/Text.js 12:0-36
  × Module not found: Can't resolve '../layout/Box' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[12:20]
 10 │ import { accessibleOpacityDisabled } from '@coinbase/cds-common/tokens/interactable';
 11 │ import { cx } from '../cx';
 12 │ import { Box } from '../layout/Box';
    ·                     ───────────────
 13 │ import { jsx as _jsx } from "react/jsx-runtime";
 14 │ const baseCss = "baseCss-bc3l1w2";
    ╰────
  help: Did you mean '../layout/Box.js'?
        
        The request '../layout/Box' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 1:0-23
  × Module not found: Can't resolve './Link' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
   ╭─[1:14]
 1 │ export * from './Link';
   ·               ────────
 2 │ export * from './Text';
 3 │ export * from './TextBody';
   ╰────
  help: Did you mean './Link.js'?
        
        The request './Link' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 2:0-23
  × Module not found: Can't resolve './Text' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
   ╭─[2:14]
 1 │ export * from './Link';
 2 │ export * from './Text';
   ·               ────────
 3 │ export * from './TextBody';
 4 │ export * from './TextCaption';
   ╰────
  help: Did you mean './Text.js'?
        
        The request './Text' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 3:0-27
  × Module not found: Can't resolve './TextBody' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
   ╭─[3:14]
 1 │ export * from './Link';
 2 │ export * from './Text';
 3 │ export * from './TextBody';
   ·               ────────────
 4 │ export * from './TextCaption';
 5 │ export * from './TextDisplay1';
   ╰────
  help: Did you mean './TextBody.js'?
        
        The request './TextBody' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 4:0-30
  × Module not found: Can't resolve './TextCaption' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
   ╭─[4:14]
 2 │ export * from './Text';
 3 │ export * from './TextBody';
 4 │ export * from './TextCaption';
   ·               ───────────────
 5 │ export * from './TextDisplay1';
 6 │ export * from './TextDisplay2';
   ╰────
  help: Did you mean './TextCaption.js'?
        
        The request './TextCaption' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 5:0-31
  × Module not found: Can't resolve './TextDisplay1' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
   ╭─[5:14]
 3 │ export * from './TextBody';
 4 │ export * from './TextCaption';
 5 │ export * from './TextDisplay1';
   ·               ────────────────
 6 │ export * from './TextDisplay2';
 7 │ export * from './TextDisplay3';
   ╰────
  help: Did you mean './TextDisplay1.js'?
        
        The request './TextDisplay1' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 6:0-31
  × Module not found: Can't resolve './TextDisplay2' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
   ╭─[6:14]
 4 │ export * from './TextCaption';
 5 │ export * from './TextDisplay1';
 6 │ export * from './TextDisplay2';
   ·               ────────────────
 7 │ export * from './TextDisplay3';
 8 │ export * from './TextHeadline';
   ╰────
  help: Did you mean './TextDisplay2.js'?
        
        The request './TextDisplay2' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 7:0-31
  × Module not found: Can't resolve './TextDisplay3' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
   ╭─[7:14]
 5 │ export * from './TextDisplay1';
 6 │ export * from './TextDisplay2';
 7 │ export * from './TextDisplay3';
   ·               ────────────────
 8 │ export * from './TextHeadline';
 9 │ export * from './TextInherited';
   ╰────
  help: Did you mean './TextDisplay3.js'?
        
        The request './TextDisplay3' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 8:0-31
  × Module not found: Can't resolve './TextHeadline' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[8:14]
  6 │ export * from './TextDisplay2';
  7 │ export * from './TextDisplay3';
  8 │ export * from './TextHeadline';
    ·               ────────────────
  9 │ export * from './TextInherited';
 10 │ export * from './TextLabel1';
    ╰────
  help: Did you mean './TextHeadline.js'?
        
        The request './TextHeadline' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 9:0-32
  × Module not found: Can't resolve './TextInherited' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[9:14]
  7 │ export * from './TextDisplay3';
  8 │ export * from './TextHeadline';
  9 │ export * from './TextInherited';
    ·               ─────────────────
 10 │ export * from './TextLabel1';
 11 │ export * from './TextLabel2';
    ╰────
  help: Did you mean './TextInherited.js'?
        
        The request './TextInherited' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 10:0-29
  × Module not found: Can't resolve './TextLabel1' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[10:14]
  8 │ export * from './TextHeadline';
  9 │ export * from './TextInherited';
 10 │ export * from './TextLabel1';
    ·               ──────────────
 11 │ export * from './TextLabel2';
 12 │ export * from './TextLegal';
    ╰────
  help: Did you mean './TextLabel1.js'?
        
        The request './TextLabel1' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 11:0-29
  × Module not found: Can't resolve './TextLabel2' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[11:14]
  9 │ export * from './TextInherited';
 10 │ export * from './TextLabel1';
 11 │ export * from './TextLabel2';
    ·               ──────────────
 12 │ export * from './TextLegal';
 13 │ export * from './TextTitle1';
    ╰────
  help: Did you mean './TextLabel2.js'?
        
        The request './TextLabel2' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 12:0-28
  × Module not found: Can't resolve './TextLegal' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[12:14]
 10 │ export * from './TextLabel1';
 11 │ export * from './TextLabel2';
 12 │ export * from './TextLegal';
    ·               ─────────────
 13 │ export * from './TextTitle1';
 14 │ export * from './TextTitle2';
    ╰────
  help: Did you mean './TextLegal.js'?
        
        The request './TextLegal' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 13:0-29
  × Module not found: Can't resolve './TextTitle1' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[13:14]
 11 │ export * from './TextLabel2';
 12 │ export * from './TextLegal';
 13 │ export * from './TextTitle1';
    ·               ──────────────
 14 │ export * from './TextTitle2';
 15 │ export * from './TextTitle3';
    ╰────
  help: Did you mean './TextTitle1.js'?
        
        The request './TextTitle1' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 14:0-29
  × Module not found: Can't resolve './TextTitle2' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[14:14]
 12 │ export * from './TextLegal';
 13 │ export * from './TextTitle1';
 14 │ export * from './TextTitle2';
    ·               ──────────────
 15 │ export * from './TextTitle3';
 16 │ export * from './TextTitle4';
    ╰────
  help: Did you mean './TextTitle2.js'?
        
        The request './TextTitle2' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 15:0-29
  × Module not found: Can't resolve './TextTitle3' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[15:14]
 13 │ export * from './TextTitle1';
 14 │ export * from './TextTitle2';
 15 │ export * from './TextTitle3';
    ·               ──────────────
 16 │ export * from './TextTitle4';
    ╰────
  help: Did you mean './TextTitle3.js'?
        
        The request './TextTitle3' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/typography/index.js 16:0-29
  × Module not found: Can't resolve './TextTitle4' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/typography'
    ╭─[16:14]
 14 │ export * from './TextTitle2';
 15 │ export * from './TextTitle3';
 16 │ export * from './TextTitle4';
    ·               ──────────────
    ╰────
  help: Did you mean './TextTitle4.js'?
        
        The request './TextTitle4' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 2:0-29
  × Module not found: Can't resolve './area/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
   ╭─[2:14]
 1 │ // codegen:start {preset: barrel, include: [./*.tsx, ./*/index.ts]}
 2 │ export * from './area/index';
   ·               ──────────────
 3 │ export * from './axis/index';
 4 │ export * from './bar/index';
   ╰────
  help: Did you mean './area/index.js'?
        
        The request './area/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 3:0-29
  × Module not found: Can't resolve './axis/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
   ╭─[3:14]
 1 │ // codegen:start {preset: barrel, include: [./*.tsx, ./*/index.ts]}
 2 │ export * from './area/index';
 3 │ export * from './axis/index';
   ·               ──────────────
 4 │ export * from './bar/index';
 5 │ export * from './CartesianChart';
   ╰────
  help: Did you mean './axis/index.js'?
        
        The request './axis/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 4:0-28
  × Module not found: Can't resolve './bar/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
   ╭─[4:14]
 2 │ export * from './area/index';
 3 │ export * from './axis/index';
 4 │ export * from './bar/index';
   ·               ─────────────
 5 │ export * from './CartesianChart';
 6 │ export * from './ChartProvider';
   ╰────
  help: Did you mean './bar/index.js'?
        
        The request './bar/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 5:0-33
  × Module not found: Can't resolve './CartesianChart' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
   ╭─[5:14]
 3 │ export * from './axis/index';
 4 │ export * from './bar/index';
 5 │ export * from './CartesianChart';
   ·               ──────────────────
 6 │ export * from './ChartProvider';
 7 │ export * from './gradient/index';
   ╰────
  help: Did you mean './CartesianChart.js'?
        
        The request './CartesianChart' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 6:0-32
  × Module not found: Can't resolve './ChartProvider' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
   ╭─[6:14]
 4 │ export * from './bar/index';
 5 │ export * from './CartesianChart';
 6 │ export * from './ChartProvider';
   ·               ─────────────────
 7 │ export * from './gradient/index';
 8 │ export * from './legend/index';
   ╰────
  help: Did you mean './ChartProvider.js'?
        
        The request './ChartProvider' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 7:0-33
  × Module not found: Can't resolve './gradient/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
   ╭─[7:14]
 5 │ export * from './CartesianChart';
 6 │ export * from './ChartProvider';
 7 │ export * from './gradient/index';
   ·               ──────────────────
 8 │ export * from './legend/index';
 9 │ export * from './line/index';
   ╰────
  help: Did you mean './gradient/index.js'?
        
        The request './gradient/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 8:0-31
  × Module not found: Can't resolve './legend/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[8:14]
  6 │ export * from './ChartProvider';
  7 │ export * from './gradient/index';
  8 │ export * from './legend/index';
    ·               ────────────────
  9 │ export * from './line/index';
 10 │ export * from './Path';
    ╰────
  help: Did you mean './legend/index.js'?
        
        The request './legend/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 9:0-29
  × Module not found: Can't resolve './line/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[9:14]
  7 │ export * from './gradient/index';
  8 │ export * from './legend/index';
  9 │ export * from './line/index';
    ·               ──────────────
 10 │ export * from './Path';
 11 │ export * from './PeriodSelector';
    ╰────
  help: Did you mean './line/index.js'?
        
        The request './line/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 10:0-23
  × Module not found: Can't resolve './Path' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[10:14]
  8 │ export * from './legend/index';
  9 │ export * from './line/index';
 10 │ export * from './Path';
    ·               ────────
 11 │ export * from './PeriodSelector';
 12 │ export * from './point/index';
    ╰────
  help: Did you mean './Path.js'?
        
        The request './Path' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 11:0-33
  × Module not found: Can't resolve './PeriodSelector' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[11:14]
  9 │ export * from './line/index';
 10 │ export * from './Path';
 11 │ export * from './PeriodSelector';
    ·               ──────────────────
 12 │ export * from './point/index';
 13 │ export * from './scrubber/index';
    ╰────
  help: Did you mean './PeriodSelector.js'?
        
        The request './PeriodSelector' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 12:0-30
  × Module not found: Can't resolve './point/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[12:14]
 10 │ export * from './Path';
 11 │ export * from './PeriodSelector';
 12 │ export * from './point/index';
    ·               ───────────────
 13 │ export * from './scrubber/index';
 14 │ export * from './text/index';
    ╰────
  help: Did you mean './point/index.js'?
        
        The request './point/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 13:0-33
  × Module not found: Can't resolve './scrubber/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[13:14]
 11 │ export * from './PeriodSelector';
 12 │ export * from './point/index';
 13 │ export * from './scrubber/index';
    ·               ──────────────────
 14 │ export * from './text/index';
 15 │ export * from './utils/index';
    ╰────
  help: Did you mean './scrubber/index.js'?
        
        The request './scrubber/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 14:0-29
  × Module not found: Can't resolve './text/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[14:14]
 12 │ export * from './point/index';
 13 │ export * from './scrubber/index';
 14 │ export * from './text/index';
    ·               ──────────────
 15 │ export * from './utils/index';
 16 │ // codegen:end
    ╰────
  help: Did you mean './text/index.js'?
        
        The request './text/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/chart/index.js 15:0-30
  × Module not found: Can't resolve './utils/index' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/chart'
    ╭─[15:14]
 13 │ export * from './scrubber/index';
 14 │ export * from './text/index';
 15 │ export * from './utils/index';
    ·               ───────────────
 16 │ // codegen:end
    ╰────
  help: Did you mean './utils/index.js'?
        
        The request './utils/index' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 1:0-24
  × Module not found: Can't resolve './chart' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[1:14]
 1 │ export * from './chart';
   ·               ─────────
 2 │ export * from './DefaultProgressCircleContent';
 3 │ export * from './getProgressBarLabelParts';
   ╰────
  help: Did you mean './chart/index.js'?
        
        The request './chart' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 2:0-47
  × Module not found: Can't resolve './DefaultProgressCircleContent' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[2:14]
 1 │ export * from './chart';
 2 │ export * from './DefaultProgressCircleContent';
   ·               ────────────────────────────────
 3 │ export * from './getProgressBarLabelParts';
 4 │ export * from './ProgressBar';
   ╰────
  help: Did you mean './DefaultProgressCircleContent.js'?
        
        The request './DefaultProgressCircleContent' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 3:0-43
  × Module not found: Can't resolve './getProgressBarLabelParts' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[3:14]
 1 │ export * from './chart';
 2 │ export * from './DefaultProgressCircleContent';
 3 │ export * from './getProgressBarLabelParts';
   ·               ────────────────────────────
 4 │ export * from './ProgressBar';
 5 │ export * from './ProgressBarWithFixedLabels';
   ╰────
  help: Did you mean './getProgressBarLabelParts.js'?
        
        The request './getProgressBarLabelParts' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 4:0-30
  × Module not found: Can't resolve './ProgressBar' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[4:14]
 2 │ export * from './DefaultProgressCircleContent';
 3 │ export * from './getProgressBarLabelParts';
 4 │ export * from './ProgressBar';
   ·               ───────────────
 5 │ export * from './ProgressBarWithFixedLabels';
 6 │ export * from './ProgressBarWithFloatLabel';
   ╰────
  help: Did you mean './ProgressBar.js'?
        
        The request './ProgressBar' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 5:0-45
  × Module not found: Can't resolve './ProgressBarWithFixedLabels' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[5:14]
 3 │ export * from './getProgressBarLabelParts';
 4 │ export * from './ProgressBar';
 5 │ export * from './ProgressBarWithFixedLabels';
   ·               ──────────────────────────────
 6 │ export * from './ProgressBarWithFloatLabel';
 7 │ export * from './ProgressCircle';
   ╰────
  help: Did you mean './ProgressBarWithFixedLabels.js'?
        
        The request './ProgressBarWithFixedLabels' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 6:0-44
  × Module not found: Can't resolve './ProgressBarWithFloatLabel' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[6:14]
 4 │ export * from './ProgressBar';
 5 │ export * from './ProgressBarWithFixedLabels';
 6 │ export * from './ProgressBarWithFloatLabel';
   ·               ─────────────────────────────
 7 │ export * from './ProgressCircle';
 8 │ export * from './ProgressContainerWithButtons';
   ╰────
  help: Did you mean './ProgressBarWithFloatLabel.js'?
        
        The request './ProgressBarWithFloatLabel' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 7:0-33
  × Module not found: Can't resolve './ProgressCircle' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[7:14]
 5 │ export * from './ProgressBarWithFixedLabels';
 6 │ export * from './ProgressBarWithFloatLabel';
 7 │ export * from './ProgressCircle';
   ·               ──────────────────
 8 │ export * from './ProgressContainerWithButtons';
 9 │ export * from './sparkline';
   ╰────
  help: Did you mean './ProgressCircle.js'?
        
        The request './ProgressCircle' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 8:0-47
  × Module not found: Can't resolve './ProgressContainerWithButtons' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[8:14]
 6 │ export * from './ProgressBarWithFloatLabel';
 7 │ export * from './ProgressCircle';
 8 │ export * from './ProgressContainerWithButtons';
   ·               ────────────────────────────────
 9 │ export * from './sparkline';
   ╰────
  help: Did you mean './ProgressContainerWithButtons.js'?
        
        The request './ProgressContainerWithButtons' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/index.js 9:0-28
  × Module not found: Can't resolve './sparkline' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations'
   ╭─[9:14]
 7 │ export * from './ProgressCircle';
 8 │ export * from './ProgressContainerWithButtons';
 9 │ export * from './sparkline';
   ·               ─────────────
   ╰────
  help: Did you mean './sparkline/index.js'?
        
        The request './sparkline' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/sparkline/index.js 1:0-28
  × Module not found: Can't resolve './Sparkline' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/sparkline'
   ╭─[1:14]
 1 │ export * from './Sparkline';
   ·               ─────────────
 2 │ export * from './sparkline-interactive/SparklineInteractive';
 3 │ export * from './sparkline-interactive-header/SparklineInteractiveHeader';
   ╰────
  help: Did you mean './Sparkline.js'?
        
        The request './Sparkline' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/sparkline/index.js 2:0-61
  × Module not found: Can't resolve './sparkline-interactive/SparklineInteractive' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/sparkline'
   ╭─[2:14]
 1 │ export * from './Sparkline';
 2 │ export * from './sparkline-interactive/SparklineInteractive';
   ·               ──────────────────────────────────────────────
 3 │ export * from './sparkline-interactive-header/SparklineInteractiveHeader';
 4 │ export * from './SparklineArea';
   ╰────
  help: Did you mean './sparkline-interactive/SparklineInteractive.js'?
        
        The request './sparkline-interactive/SparklineInteractive' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/sparkline/index.js 3:0-74
  × Module not found: Can't resolve './sparkline-interactive-header/SparklineInteractiveHeader' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/sparkline'
   ╭─[3:14]
 1 │ export * from './Sparkline';
 2 │ export * from './sparkline-interactive/SparklineInteractive';
 3 │ export * from './sparkline-interactive-header/SparklineInteractiveHeader';
   ·               ───────────────────────────────────────────────────────────
 4 │ export * from './SparklineArea';
 5 │ export * from './SparklineGradient';
   ╰────
  help: Did you mean './sparkline-interactive-header/SparklineInteractiveHeader.js'?
        
        The request './sparkline-interactive-header/SparklineInteractiveHeader' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/sparkline/index.js 4:0-32
  × Module not found: Can't resolve './SparklineArea' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/sparkline'
   ╭─[4:14]
 2 │ export * from './sparkline-interactive/SparklineInteractive';
 3 │ export * from './sparkline-interactive-header/SparklineInteractiveHeader';
 4 │ export * from './SparklineArea';
   ·               ─────────────────
 5 │ export * from './SparklineGradient';
   ╰────
  help: Did you mean './SparklineArea.js'?
        
        The request './SparklineArea' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.
ERROR in ./node_modules/@coinbase/cds-web/esm/visualizations/sparkline/index.js 5:0-36
  × Module not found: Can't resolve './SparklineGradient' in '/Users/graycup/Documents/GitHub/docs/node_modules/@coinbase/cds-web/esm/visualizations/sparkline'
   ╭─[5:14]
 3 │ export * from './sparkline-interactive-header/SparklineInteractiveHeader';
 4 │ export * from './SparklineArea';
 5 │ export * from './SparklineGradient';
   ·               ─────────────────────
   ╰────
  help: Did you mean './SparklineGradient.js'?
        
        The request './SparklineGradient' failed to resolve only because it was resolved as fully specified,
        probably because the origin is strict EcmaScript Module,
        e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"'.
        
        The extension in the request is mandatory for it to be fully specified.
        Add the extension to the request.