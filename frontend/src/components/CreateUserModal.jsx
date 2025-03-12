import React, { useState } from 'react'
import { BiAddToQueue } from "react-icons/bi"
import { Button, Flex, Box } from '@chakra-ui/react'
import { 
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  DialogTrigger
} from '@/components/ui/dialog'
import { Field } from '@/components/ui/field'
import { Radio, RadioGroup } from '@/components/ui/radio'

const CreateUserModal = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    description: '',
    gender: 'Male'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      gender: value
    }))
  }

  const handleSubmit = (close) => {
    console.log('Form submitted:', formData)
    // Add your submission logic here
    close()
  }

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>
          <BiAddToQueue size={20}/>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>My new BFF 🔥</DialogHeader>
        <DialogCloseTrigger />

        <DialogBody pb={6}>
          <Flex direction="column" gap={4}>
            <Flex gap={4}>
              <Field label="Full Name">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #e2e8f0'
                  }}
                />
              </Field>
              
              <Field label="Role">
                <input
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Software Engineer"
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #e2e8f0'
                  }}
                />
              </Field>
            </Flex>
            
            <Field label="Description">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="He's a software engineer who loves to code and build things."
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #e2e8f0',
                  height: '100px',
                  resize: 'none'
                }}
              />
            </Field>
            
            <Box>
              <RadioGroup value={formData.gender} onChange={handleRadioChange}>
                <Flex gap={5}>
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                </Flex>
              </RadioGroup>
            </Box>
          </Flex>
        </DialogBody>

        <DialogFooter>
          <DialogCloseTrigger asChild>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit}>
              Add
            </Button>
          </DialogCloseTrigger>
          <DialogCloseTrigger asChild>
            <Button>Cancel</Button>
          </DialogCloseTrigger>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  )
}

export default CreateUserModal
