import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { AppState } from '../../types'
import { fetchCountries, addToCart } from '../../redux/actions'
import { context } from '../../contexts/context'

import {
  Card,
  Image,
  CardContainer,
  CardBody,
  CardTitle,
  CardDescription,
  Span,
  P,
} from './countryStyle'
const SingleCountry = () => {
  const { state } = useContext(context)
  const { name } = useParams() as any
  const history = useHistory()

  const countries = useSelector((state: AppState) => state.table.countries)
  const cartItems = useSelector((state: AppState) => state.cart.cart)

  const dispatch = useDispatch()
  const [currentCountry, setCurrentCountry] = useState<any>(
    countries.find((country) => country.name.common === name)
  )

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    setCurrentCountry(countries.find((country) => country.name.common === name))
  }, [countries, name])

  return (
    <>
      {currentCountry && currentCountry.name.common && (
        <CardContainer>
          <Card>
            <CardBody>
              <Button onClick={() => history.push('/')}>
                <ArrowBackIos /> Back
              </Button>

              <CardTitle className="card-title">
                {currentCountry?.name.common}
              </CardTitle>
              <CardDescription className="card-description ">
                <P>
                  Region <Span>{currentCountry?.region}</Span>{' '}
                </P>
                <P>
                  Capital <Span>{currentCountry?.capital}</Span>
                </P>
                <P>
                  Population <Span>{currentCountry?.population}</Span>
                </P>
                <P>
                  Language(s):
                  {currentCountry.languages &&
                    Object.entries(currentCountry.languages).map((value) => (
                      <li key={value[0]}>
                        <Span>{value.join(': ')}</Span>
                      </li>
                    ))}
                </P>
              </CardDescription>
              {cartItems.find(
                (item: { name: any }) =>
                  item.name.common === currentCountry.name.common
              ) ? (
                <Button variant="contained" disabled>
                  Add
                </Button>
              ) : (
                <Button
                  variant="contained"
                  style={{ background: state.ui, color: state.ft }}
                  onClick={() => dispatch(addToCart(currentCountry))}
                >
                  Add
                </Button>
              )}
            </CardBody>
            <Image
              src={currentCountry?.flags.svg}
              alt={currentCountry?.name.common}
              className="card-media"
            />
          </Card>
        </CardContainer>
      )}
    </>
  )
}

export default SingleCountry
