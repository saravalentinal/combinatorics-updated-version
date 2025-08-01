import { React } from 'react'
import '../index.css'

import CombinationWithRepetition from './CombinationWithRepetition'
import CombinationWithoutRepetition from './CombinationWithoutRepetition'
import Permutation from './Permutation'
import VariationWithoutRepetition from './VariationWithoutRepetition'
import VariationWithRepetition from './VariationWithRepetition'
import MethodCalculator from './MethodCalculator'
import PrivacyPolicy from './PrivacyPolicy';
import Options from './Options'
/* import Error from './Error' */
import {Routes, Route} from 'react-router-dom'

export default function Main() {

  return (
    <>
    <div className='main-calc'>
      <Options/>
        <Routes>
          <Route path='/combinationWithoutRepetition' exact element={<CombinationWithoutRepetition/>}/>
          <Route path='/combinationWithRepetition' exact element={<CombinationWithRepetition/>}/>
          <Route path='/permutation' exact element={<Permutation/>}/>
          <Route path='/variationWithoutRepetition' exact element={<VariationWithoutRepetition/>}/>
          <Route path='/variationWithRepetition' exact element={<VariationWithRepetition/>}/>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path='/' exact element={<MethodCalculator/>}/>
          <Route path='*' element={<MethodCalculator/>}></Route>
        </Routes>
      </div>
    </>
  )
}
