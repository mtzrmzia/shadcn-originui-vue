<script setup lang="ts">
defineOptions({
  name: 'SCAccordionDemo',
});
</script>

<template>
  <div class="grid w-full max-w-xl gap-4">
    <SCAccordion type="single" collapsible class="w-full">
      <SCAccordionItem value="item-1">
        <SCAccordionTrigger>Is it accessible?</SCAccordionTrigger>
        <SCAccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </SCAccordionContent>
      </SCAccordionItem>
      <SCAccordionItem value="item-2">
        <SCAccordionTrigger>Is it styled?</SCAccordionTrigger>
        <SCAccordionContent>
          Yes. It comes with default styles that matches the other
          components' aesthetic.
        </SCAccordionContent>
      </SCAccordionItem>
      <SCAccordionItem value="item-3">
        <SCAccordionTrigger>Is it animated?</SCAccordionTrigger>
        <SCAccordionContent>
          Yes. It's animated by default, but you can disable it if you
          prefer.
        </SCAccordionContent>
      </SCAccordionItem>
    </SCAccordion>
    <SCAccordion type="single" collapsible class="w-full">
      <SCAccordionItem value="item-1">
        <SCAccordionTrigger>
          What are the key considerations when implementing a comprehensive
          enterprise-level authentication system?
        </SCAccordionTrigger>
        <SCAccordionContent>
          Implementing a robust enterprise authentication system requires
          careful consideration of multiple factors. This includes secure
          password hashing and storage, multi-factor authentication (MFA)
          implementation, session management, OAuth2 and SSO integration,
          regular security audits, rate limiting to prevent brute force
          attacks, and maintaining detailed audit logs. Additionally,
          you'll need to consider scalability, performance impact, and
          compliance with relevant data protection regulations such as GDPR or
          HIPAA.
        </SCAccordionContent>
      </SCAccordionItem>
      <SCAccordionItem value="item-2">
        <SCAccordionTrigger>
          How does modern distributed system architecture handle eventual
          consistency and data synchronization across multiple regions?
        </SCAccordionTrigger>
        <SCAccordionContent>
          Modern distributed systems employ various strategies to maintain
          data consistency across regions. This often involves using
          techniques like CRDT (Conflict-Free Replicated Data Types), vector
          clocks, and gossip protocols. Systems might implement event sourcing
          patterns, utilize message queues for asynchronous updates, and
          employ sophisticated conflict resolution strategies. Popular
          solutions like Amazon's DynamoDB and Google's Spanner
          demonstrate different approaches to solving these challenges,
          balancing between consistency, availability, and partition tolerance
          as described in the CAP theorem.
        </SCAccordionContent>
      </SCAccordionItem>
    </SCAccordion>
  </div>
</template>

