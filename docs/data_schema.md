# Data Schema

## Image
  - url (aws url)
  - properties

## User

  - email
  - name
  - pilot handle
  - banner (Image)
  - avatar (Image)
  - homeChapter (Chapter)
  - password
  - resetPassword
  - [ Chapters ]

## Quadcopter

  - owner (User)
  - name
  - Image
  - link (rotorbuilds maybe??)

## Location

  - name
  - address
    - street
    - city
    - state
    - country
    - zip
  - [ Images ]
  - amenities
  - [ Tracks ]

## Track

  - name
  - Image

## Chapter

  - name
  - location
  - banner (Image)
  - avatar (Image)

## Event

  - name
  - isPrivate
  - status
  - description
  - flyer (Image)
  - start_at
  - end_at
  - [ Races ]

## Race

  - class
  - format
  - status
  - starts_at
  - [ Users ]
  - results
